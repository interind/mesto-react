import React from 'react';
import api from '../utils/api.js';
import Main from './Main.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Loader from './Loader/Loader.js';
import AddPlacePopup from './AddPlacePopup.js';
import DeleteCardPopup from './DeleteCardPopup.js';
import ErrorBoundary from './Error/ErrorBoundary.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import { CurrentUserContext } from '../context/CurrentUserContext.js';
import { ErrorPage } from './Error/ErrorPage';

function App() {
  const [isCard, setIsCard] = React.useState({});
  const [isAddPlacePopupOpen, setAddPlacePopup] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopup] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopup] = React.useState(false);
  const [isConfirmTrashPopupOpen, setConfirmTrashPopup] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    about: '',
    _id: '',
    avatar: '',
  }); // тут информация обо мне с сервера
  const [cards, setCards] = React.useState([]); // тут информация о карточках
  const [loading, setLoading] = React.useState(true); // лоадер при загрузке страницы
  const [statusOk, setIsOk] = React.useState(true); // флаг для ошибки сервера
  const [statusError, setError] = React.useState({}); // флаг для ошибки сервера
  const [isOpenCard, setOpenCard] = React.useState(false); // тут булевое значение для попапа с картинкой
  const [selectedCard, setSelectedCard] = React.useState({}); // объект для попапа с картинкой
  const [buttonLoading, setButtonLoading] = React.useState(false); // Лоадер для кнопки сохранить.

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
    Promise.all([api.getInfoForUser(), api.getInfoForCards()])
      .then(([dataUser, dataCards]) => {
        setCurrentUser(dataUser);
        setCards(dataCards);
      })
      .catch((err) => {
        console.error('Информация сервера с ошибкой', err.message);
        setError(err);
        setIsOk(false);
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
        console.error('Информация обновления пользователя с ошибкой', err)
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
        console.error('Информация обновления пользователя с ошибкой', err)
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
        console.error('Информация обновления карточки с ошибкой', err)
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
        console.error('Информация по карточкам с ошибкой', err.message)
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
        console.error('Информация по карточкам с ошибкой', err.message)
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
            {loading && <Loader />}
            {statusOk ? (
              <React.Fragment>
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
                  statusOk={statusOk}
                />

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
            ) : (
              <ErrorPage error={statusError} />
            )}
            <Footer />
          </ErrorBoundary>
        </CurrentUserContext.Provider>
      </div>
    </React.Fragment>
  );
}

export default App;
