import React from 'react';

function ImagePopup({ selectedCard, closePopupClick }) {
  const classOpen = [];
  if (selectedCard.link) {
    classOpen.length = 0;
    classOpen.push('popup_opened');
  }
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
          onClick={closePopupClick}></button>
      </div>
    </div>
  );
}

export default ImagePopup;
