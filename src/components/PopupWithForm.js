import React from 'react';
import { infoPopups } from '../utils/infoPopups.js';

function PopupWithForm({ infoPopup }) {
  const classes = [];

  function closePopupClick(evt) {
    const close = evt.target.closest('.popup');
    close.classList.remove('popup_opened');
    classes.length = 0;
  }

  if (infoPopup.isOpen) {
    classes.push('popup_opened');
    infoPopups.map((infoPopup) => (infoPopup.isOpen = false));
  }

  return (
    <>
      <div
        className={`popup popup_type_${infoPopup.name} ${classes.join(' ')}`}>
        <form
          className={`popup__container popup__container_type_${infoPopup.typeName}`}
          name={infoPopup.form}
          noValidate>
          <h2 className='popup__title'>{infoPopup.title}</h2>
          {infoPopup.inputOne}
          {infoPopup.errorOne}
          {infoPopup.inputTwo}
          {infoPopup.errorTwo}
          <button
            className='popup__button-submit'
            type='submit'
            title={infoPopup.button}>
            {infoPopup.button}
          </button>
          <button
            className='popup__button-close'
            type='button'
            title='закрыть'
            onClick={closePopupClick}></button>
        </form>
      </div>
    </>
  );
}

export default PopupWithForm;
