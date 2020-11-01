import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import api from '../utils/api.js';

function App() {
  const avatar = { id: 1, name: 'avatar', title: 'Обновить аватар' };
  const profile = { id: 2, name: 'profile', title: 'Редактировать форму' };
  const place = { id: 3, name: 'place', title: 'Новое место' };
  const trash = { id: 4, name: 'trash', title: 'Вы уверены?' };

  let [isEditAvatarPopupOpen, setAvatarPopup] = React.useState(false);
  let [isEditProfilePopupOpen, setProfilePopup] = React.useState(false);
  let [isAddPlacePopupOpen, setPlacePopup] = React.useState(false);
  let [isConfirmTrashPopupOpen, setTrashPopup] = React.useState(false);
  const [user, setUser] = React.useState({}); // тут информация обо мне с сервера
  const [cards, setCards] = React.useState([]); // тут информация о карточках
  const [selectedCard, setSelectedCard] = React.useState(false); // тут булевое значение для попапа с картинкой

  function closeAllPopups() {
    setTimeout(() => {
      setAvatarPopup(false);

      setProfilePopup(false);

      setPlacePopup(false);

      setTrashPopup(false);

      setSelectedCard(false);
    }, 100);
  }

  function handleEditAvatarClick() {
    setAvatarPopup(true);
  }
  function handleEditProfileClick() {
    setProfilePopup(true);
  }
  function handleAddPlaceClick() {
    setPlacePopup(true);
  }
  function handleConfirmTrashClick() {
    setTrashPopup(true);
  }
  function handleCardClick(evt) {
    // для открытия попапа с картинкой
    const imgTarget = evt.target;
    if (imgTarget.classList.contains('element__pic')) {
      setSelectedCard({ link: imgTarget.src, name: imgTarget.alt });
    }
  }

  React.useEffect(
    () => {
      setAvatarPopup(false);
      setProfilePopup(false);
      setPlacePopup(false);
      setTrashPopup(false);
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
        })
        .catch((err) => console.log('Информация по карточкам с ошибкой', err));

      setSelectedCard({});
    },
    [],
    { selectedCard }
  );

  return (
    <div className='page'>
      <Header />
      <Main
        avatar={avatar}
        profile={profile}
        place={place}
        trash={trash}
        isEditAvatarPopupOpen={isEditAvatarPopupOpen}
        isEditProfilePopupOpen={isEditProfilePopupOpen}
        isAddPlacePopupOpen={isAddPlacePopupOpen}
        isConfirmTrashPopupOpen={isConfirmTrashPopupOpen}
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onConfirmTrash={handleConfirmTrashClick}
        user={user}
        cards={cards}
        closeAllPopups={closeAllPopups}
        handleCardClick={handleCardClick}
        selectedCard={selectedCard}
      />
      <Footer />
    </div>
  );
}

export default App;
