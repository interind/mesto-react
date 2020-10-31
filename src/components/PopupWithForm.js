import React from 'react';

function PopupWithForm({ infoPopup, closeAllPopups }) {
  const classes = []; // массив для открытия попапа
  classes.length = 0;

  if (infoPopup.isOpen) {
    classes.push('popup_opened');
  }

  return (
    <React.Fragment>
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
            onClick={closeAllPopups}></button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default PopupWithForm;
