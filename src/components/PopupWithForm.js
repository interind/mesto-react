import React from 'react';

function PopupWithForm({ infoPopup }) {
  const closePopupClick = () => {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
  };

  return (
    <>
      <div
        className={`popup popup_type_${infoPopup.name} ${
          infoPopup.isOpen ? 'popup_opened' : ''
        }`}>
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
