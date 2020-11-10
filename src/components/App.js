import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import api from '../utils/api.js';
import { CurrentUserContext } from '../context/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';

function App() {
  let [isEditAvatarPopupOpen, setEditAvatarPopup] = React.useState(false);
  let [isEditProfilePopupOpen, setEditProfilePopup] = React.useState(false);
  let [placePopup, setPlacePopup] = React.useState({
    id: 3,
    name: 'place',
    title: 'Новое место',
    buttonTitle: 'Сохранить',
    isAddPlacePopupOpen: false,
  });
  let [trashPopup, setTrashPopup] = React.useState({
    id: 4,
    name: 'trash',
    title: 'Вы уверены?',
    buttonTitle: 'Да',
    isConfirmTrashPopupOpen: false,
  });
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

  function closeAllPopups() {
    setEditAvatarPopup(false);
    setEditProfilePopup(false);
    setPlacePopup({ ...placePopup, isAddPlacePopupOpen: false });
    setTrashPopup({ ...trashPopup, isConfirmTrashPopupOpen: false });
    setOpenCard(false);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopup(true);
  }
  function handleEditProfileClick() {
    setEditProfilePopup(true);
  }
  function handleAddPlaceClick() {
    setPlacePopup({ ...placePopup, isAddPlacePopupOpen: true });
  }
  function handleConfirmTrashClick() {
    setTrashPopup({ ...trashPopup, isConfirmTrashPopupOpen: true });
  }
  function handleCardClick(props) {
    // для открытия попапа с картинкой
    setSelectedCard({ link: props.link, name: props.name });
    setOpenCard(true);
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
            placePopup={placePopup}
            onEditProfile={handleEditProfileClick}
            // trashPopup={trashPopup}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onConfirmTrash={handleConfirmTrashClick}
            closeAllPopups={closeAllPopups}
            handleCardClick={handleCardClick}
            selectedCard={selectedCard}
            isOpenCard={isOpenCard}
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
