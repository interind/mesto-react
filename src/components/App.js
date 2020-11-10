import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import api from '../utils/api.js';
import { CurrentUserContext } from '../context/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';

function App() {
  let [isEditAvatarPopupOpen, setEditAvatarPopup] = React.useState(false);
  let [isEditProfilePopupOpen, setEditProfilePopup] = React.useState(false);
  let [isAddPlacePopupOpen, setAddPlacePopup] = React.useState(false);
  // let [trashPopup, setTrashPopup] = React.useState({
  //   id: 4,
  //   name: 'trash',
  //   title: 'Вы уверены?',
  //   buttonTitle: 'Да',
  // });
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    about: '',
    _id: '',
    avatar: '',
  }); // тут информация обо мне с сервера

  const [selectedCard, setSelectedCard] = React.useState({}); // объект для попапа с картинкой
  const [isOpenCard, setOpenCard] = React.useState(false); // тут булевое значение для попапа с картинкой

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
        console.log(newCard);
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
    // setTrashPopup({ ...trashPopup, isConfirmTrashPopupOpen: false });
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
  // function handleConfirmTrashClick() {
  //   setTrashPopup({ ...trashPopup, isConfirmTrashPopupOpen: true });
  // }
  function handleCardClick(props) {
    // для открытия попапа с картинкой
    setSelectedCard({ link: props.link, name: props.name });
    setOpenCard(true);
  }

  const [cards, setCards] = React.useState([]); // тут информация о карточках
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
      );
  }

  React.useEffect(() => {
    api
      .getInfoUser()
      .then((dataUser) => {
        setCurrentUser(dataUser);
      })
      .catch((err) => console.log('Информация пользователя с ошибкой', err));
  }, []);

  return (
    <React.Fragment>
      <div className='page'>
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            // onConfirmTrash={handleConfirmTrashClick}
            handleCardDelete={handleCardDelete}
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
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </React.Fragment>
  );
}

export default App;
