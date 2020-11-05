import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import api from '../utils/api.js';
import ErrorBoundary from './Error/ErrorBoundary.js'; // предохранитель, вроде рабочий ((()))

function App() {
  // const avatar = {
  //   id: 1,
  //   name: 'avatar',
  //   title: 'Обновить аватар',
  //   buttonTitle: 'Сохранить',
  //   isEditAvatarPopupOpen: false
  // };
  // const profile = {
  //   id: 2,
  //   name: 'profile',
  //   title: 'Редактировать форму',
  //   buttonTitle: 'Сохранить',
  //   isEditProfilePopupOpen: false
  // };
  // const place = {
  //   id: 3,
  //   name: 'place',
  //   title: 'Новое место',
  //   buttonTitle: 'Сохранить',
  //   isAddPlacePopupOpen: false
  // };
  // const trash = {
  //   id: 4,
  //   name: 'trash',
  //   title: 'Вы уверены?',
  //   buttonTitle: 'Да',
  //   isConfirmTrashPopupOpen: false
  // };

  let [avatarPopup, setAvatarPopup] = React.useState({
    id: 1,
    name: 'avatar',
    title: 'Обновить аватар',
    buttonTitle: 'Сохранить',
    isEditAvatarPopupOpen: false,
  });
  let [profilePopup, setProfilePopup] = React.useState({
    id: 2,
    name: 'profile',
    title: 'Редактировать форму',
    buttonTitle: 'Сохранить',
    isEditProfilePopupOpen: false,
  });
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
  const [user, setUser] = React.useState({}); // тут информация обо мне с сервера
  const [cards, setCards] = React.useState([]); // тут информация о карточках
  const [selectedCard, setSelectedCard] = React.useState({}); // объект для попапа с картинкой
  const [isOpenCard, setOpenCard] = React.useState(false); // тут булевое значение для попапа с картинкой

  function closeAllPopups() {
    setAvatarPopup({ ...avatarPopup, isEditAvatarPopupOpen: false });
    setProfilePopup({ ...profilePopup, isEditProfilePopupOpen: false });
    setPlacePopup({ ...placePopup, isAddPlacePopupOpen: false });
    setTrashPopup({ ...trashPopup, isConfirmTrashPopupOpen: false });
    setOpenCard(false);
    setTimeout(() => {
      setSelectedCard({});
    }, 500);
  }

  function handleEditAvatarClick() {
    setAvatarPopup({ ...avatarPopup, isEditAvatarPopupOpen: true });
  }
  function handleEditProfileClick() {
    setProfilePopup({ ...profilePopup, isEditProfilePopupOpen: true });
  }
  function handleAddPlaceClick() {
    setPlacePopup({ ...placePopup, isAddPlacePopupOpen: true });
  }
  function handleConfirmTrashClick() {
    setTrashPopup({ ...trashPopup, isConfirmTrashPopupOpen: true });
  }
  function handleCardClick({ link, name }) {
    // для открытия попапа с картинкой
    setSelectedCard({ link: link, name: name });
    setOpenCard(true);
  }

  // function handleSubmitAvatar() {

  // }

  React.useEffect(() => {
    api
      .getInfoUser()
      .then((dataUser) => {
        setUser(dataUser);
      })
      .catch((err) => console.log('Информация пользователя с ошибкой', err));

    api
      .getInfoCards()
      .then((data) => {
        setCards(data[0]);
        console.log(data[0]);
      })
      .catch((err) => console.log('Информация по карточкам с ошибкой', err));
  }, []);

  return (
    <div className='page'>
      <Header />
      <ErrorBoundary>
        <Main
          avatarPopup={avatarPopup}
          profilePopup={profilePopup}
          placePopup={placePopup}
          trashPopup={trashPopup}
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onConfirmTrash={handleConfirmTrashClick}
          user={user}
          cards={cards}
          closeAllPopups={closeAllPopups}
          handleCardClick={handleCardClick}
          selectedCard={selectedCard}
          isOpenCard={isOpenCard}
        />
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default App;
