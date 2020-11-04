import React from 'react';

function ImagePopup({ selectedCard, closeAllPopups, isOpen }) {
  const classOpen = []; // массив для открытия попапа и закрытия
  isOpen ? classOpen.push('popup_opened') : (classOpen.length = 0);
  return (
    <div className={`popup popup_type_zoom ${classOpen.join(' ')}`}>
      <div className='popup__zoom'>
        <img
          className='popup__pic'
          src={selectedCard.link}
          alt={selectedCard.name}
        />
        <span className='popup__place-pic'>{selectedCard.name}</span>
        <button
          className='popup__button-close'
          type='button'
          title='закрыть'
          onClick={closeAllPopups}></button>
      </div>
    </div>
  );
}

export default ImagePopup;
