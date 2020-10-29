import React from 'react';

function ImagePopup({ url, title, alt }) {
  return (
    <div className='popup popup_type_zoom'>
      <div className='popup__zoom'>
        <img className='popup__pic' src='#' alt='#' />
        <span className='popup__place-pic'></span>
        <button
          className='popup__button-close'
          type='button'
          title='закрыть'></button>
      </div>
    </div>
  );
}

export default ImagePopup;
