import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import api from '../utils/api.js';
import { CurrentUserContext } from '../context/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import DeleteCardPopup from './DeleteCardPopup.js';
import ErrorBoundary from './Error/ErrorBoundary.js';

function App() {
  let [isEditAvatarPopupOpen, setEditAvatarPopup] = React.useState(false);
  let [isEditProfilePopupOpen, setEditProfilePopup] = React.useState(false);
  let [isAddPlacePopupOpen, setAddPlacePopup] = React.useState(false);
  let [isConfirmTrashPopupOpen, setConfirmTrashPopup] = React.useState(false);
  const [isCard, setIsCard] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    about: '',
    _id: '',
    avatar: '',
  }); // тут информация обо мне с сервера
  const [cards, setCards] = React.useState([]); // тут информация о карточках
  const [selectedCard, setSelectedCard] = React.useState({}); // объект для попапа с картинкой
  const [isOpenCard, setOpenCard] = React.useState(false); // тут булевое значение для попапа с картинкой

  React.useEffect(() => {
    api
      .getInfoCards()
      .then((dataCards) => {
        setCards(dataCards);
      })

      .catch((err) =>
        console.log('Информация по карточкам с ошибкой', err.message)
      );
  }, []);

  React.useEffect(() => {
    api
      .getInfoUser()
      .then((dataUser) => {
        setCurrentUser(dataUser);
      })
      .catch((err) => console.log('Информация пользователя с ошибкой', err));
  }, []);

  function handleUpdateUser(props) {
    api
      .updateUserInfo({ name: props.name, about: props.about })
      .then((infoUser) => {
        setCurrentUser({
          ...currentUser,
          name: infoUser.name,
          about: infoUser.about,
        });
      })
      .catch((err) =>
        console.log('Информация обновления пользователя с ошибкой', err)
      )
      .finally(() => {
        closeAllPopups();
      });
  }

  function handleUpdateAvatar(props) {
    api
      .updateUserAvatar({ avatar: props.avatar })
      .then((infoAvatar) => {
        setCurrentUser({ ...currentUser, avatar: infoAvatar.avatar });
      })
      .catch((err) =>
        console.log('Информация обновления пользователя с ошибкой', err)
      )
      .finally(() => {
        closeAllPopups();
      });
  }

  function handleAddPlace(props) {
    api
      .addCard({ name: props.name, link: props.link })
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .catch((err) =>
        console.log('Информация обновления карточки с ошибкой', err)
      )
      .finally(() => {
        closeAllPopups();
      });
  }

  function closeAllPopups() {
    setEditAvatarPopup(false);
    setEditProfilePopup(false);
    setAddPlacePopup(false);
    setConfirmTrashPopup(false);
    setOpenCard(false);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopup(true);
  }
  function handleEditProfileClick() {
    setEditProfilePopup(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopup(true);
  }
  function handleConfirmTrashClick(card) {
    setConfirmTrashPopup(true);
    setIsCard(card);
  }
  function handleCardClick(props) {
    // для открытия попапа с картинкой
    setSelectedCard({ link: props.link, name: props.name });
    setOpenCard(true);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
      .catch((err) =>
        console.log('Информация по карточкам с ошибкой', err.message)
      );
  }

  function handleCardDelete(card) {
    const idCard = card._id;
    api
      .deleteCard(card._id)
      .then(() => {
        setCards(cards.filter((card) => card._id !== idCard));
      })
      .catch((err) =>
        console.log('Информация по карточкам с ошибкой', err.message)
      )
      .finally(() => {
        closeAllPopups();
      });
  }

  return (
    <React.Fragment>
      <div className='page'>
        <CurrentUserContext.Provider value={currentUser}>
          <ErrorBoundary>
            <Header />
            <Main
              onEditProfile={handleEditProfileClick}
              onEditAvatar={handleEditAvatarClick}
              onAddPlace={handleAddPlaceClick}
              handleCardDelete={handleConfirmTrashClick}
              closeAllPopups={closeAllPopups}
              handleCardClick={handleCardClick}
              selectedCard={selectedCard}
              isOpenCard={isOpenCard}
              handleCardLike={handleCardLike}
              cards={cards}
            />
            <AddPlacePopup
              isOpen={isAddPlacePopupOpen}
              onClose={closeAllPopups}
              onAddPlace={handleAddPlace}
            />
            <EditAvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
              onUpdateAvatar={handleUpdateAvatar}
            />
            <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
              onUpdateUser={handleUpdateUser}
            />
            <DeleteCardPopup
              isOpen={isConfirmTrashPopupOpen}
              onClose={closeAllPopups}
              onDeleteCard={handleCardDelete}
              isCard={isCard}
            />
            <Footer />
          </ErrorBoundary>
        </CurrentUserContext.Provider>
      </div>
    </React.Fragment>
  );
}

export default App;
