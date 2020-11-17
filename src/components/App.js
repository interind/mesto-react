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
import Loader from './Loader/Loader.js';
import { initialCards } from '../utils/array.js';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopup] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopup] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopup] = React.useState(false);
  const [isConfirmTrashPopupOpen, setConfirmTrashPopup] = React.useState(false);
  const [isCard, setIsCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    about: '',
    _id: '',
    avatar: '',
  }); // тут информация обо мне с сервера
  const [cards, setCards] = React.useState([]); // тут информация о карточках
  const [selectedCard, setSelectedCard] = React.useState({}); // объект для попапа с картинкой
  const [isOpenCard, setOpenCard] = React.useState(false); // тут булевое значение для попапа с картинкой
  const [loading, setLoading] = React.useState(true); // лоадер при загрузке страницы
  const [buttonLoading, setButtonLoading] = React.useState(false); // Лоадер для кнопки сохранить.
  const [isOk, setIsOk] = React.useState(true);

  function closeAllPopupsEsc(evt) {
    if (evt.key === 'Escape') {
      closeAllPopups();
    }
  }

  React.useEffect(() => {
    window.addEventListener('keydown', closeAllPopupsEsc);

    return () => {
      window.removeEventListener('keydown', closeAllPopupsEsc);
    };
  });

  React.useEffect(() => {
    // получаем данные с сервера
    Promise.all([api.getInfoUser(), api.getInfoCards()])
      .then(([dataUser, dataCards]) => {
        setCurrentUser(dataUser);
        setCards(dataCards);
      })
      .catch((err) => {
        console.log('Информация сервера с ошибкой', err.message);
        setIsOk(false);
        setCurrentUser({});
        setCards(initialCards);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function handleUpdateUser(props) {
    // получаем новую информацию пользователя  с сервера
    setButtonLoading(true);

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
    setButtonLoading(true);
    // получаем обновленный аватар с сервера
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
    setButtonLoading(true);
    // получаем новую карточку с сервера и вставляем в начало
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
    // закрытие всех попапов
    setEditAvatarPopup(false);
    setEditProfilePopup(false);
    setAddPlacePopup(false);
    setConfirmTrashPopup(false);
    setOpenCard(false);
    setButtonLoading(false);
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

  function handleCardLike({ likes, _id }) {
    // получаем лайки с сервера
    const isLiked = likes.some((i) => i._id === currentUser._id);

    api
      .changeLikeCardStatus(_id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === _id ? newCard : c));
        setCards(newCards);
      })
      .catch((err) =>
        console.log('Информация по карточкам с ошибкой', err.message)
      );
  }

  function handleCardDelete({ _id }) {
    // удаляем карточку
    const idCard = _id;

    setButtonLoading(true);

    api
      .deleteCard(_id)
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
              isOk={isOk}
            />
            {loading && <Loader />}
            {isOk && (
              <React.Fragment>
                <AddPlacePopup
                  isOpen={isAddPlacePopupOpen}
                  onClose={closeAllPopups}
                  onAddPlace={handleAddPlace}
                  isLoadingButton={buttonLoading}
                />
                <EditAvatarPopup
                  isOpen={isEditAvatarPopupOpen}
                  onClose={closeAllPopups}
                  onUpdateAvatar={handleUpdateAvatar}
                  isLoadingButton={buttonLoading}
                />
                <EditProfilePopup
                  isOpen={isEditProfilePopupOpen}
                  onClose={closeAllPopups}
                  onUpdateUser={handleUpdateUser}
                  isLoadingButton={buttonLoading}
                />
                <DeleteCardPopup
                  isOpen={isConfirmTrashPopupOpen}
                  onClose={closeAllPopups}
                  onDeleteCard={handleCardDelete}
                  isCard={isCard}
                  isLoadingButton={buttonLoading}
                />
              </React.Fragment>
            )}
            <Footer />
          </ErrorBoundary>
        </CurrentUserContext.Provider>
      </div>
    </React.Fragment>
  );
}

export default App;
