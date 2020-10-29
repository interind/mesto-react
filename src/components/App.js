import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import { infoPopups } from '../utils/infoPopups.js';

function App() {
  const handleEditAvatarClick = () => {
    console.log(123);
  };

  const handleEditProfileClick = () => {
    console.log(124);
  };

  const handleAddPlaceClick = () => {
    console.log(125);
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
