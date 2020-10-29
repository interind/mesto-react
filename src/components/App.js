import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import { infoPopups } from '../utils/infoPopups.js';

function App() {
  const [isOpen, setPopupOpen] = React.useState({
    isEditProfilePopupOpen: false,
    isAddPlacePopupOpen: false,
    isEditAvatarPopupOpen: false,
  });

  const handleEditAvatarClick = () => {
    setPopupOpen({ isEditAvatarPopupOpen: true });
    document.querySelector('.popup_type_avatar').classList.add('popup_opened');
  };

  const handleEditProfileClick = () => {
    setPopupOpen({ isEditProfilePopupOpen: true });
    document.querySelector('.popup_type_profile').classList.add('popup_opened');
  };

  const handleAddPlaceClick = () => {
    setPopupOpen({ isAddPlacePopupOpen: true });
    document.querySelector('.popup_type_card').classList.add('popup_opened');
  };

  return (
    <div className='page'>
      <Header />
      <Main
        infoPopups={infoPopups}
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
      />
      <Footer />
    </div>
  );
}

export default App;
