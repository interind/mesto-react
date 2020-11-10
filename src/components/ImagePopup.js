import React from 'react';

function ImagePopup({ selectedCard, onClose, isOpen }) {
  return (
    <div className={`popup popup_type_zoom ${isOpen && 'popup_opened'}`}>
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
          onClick={onClose}></button>
      </div>
    </div>
  );
}

export default ImagePopup;
