import React from 'react';

function PopupWithForm(props) {
  const classes = []; // массив для открытия попапа
  props.isOpen ? classes.push('popup_opened') : (classes.length = 0);

  return (
    <React.Fragment>
      <div className={`popup popup_type_${props.name} ${classes.join(' ')}`}>
        <form
          className={`popup__container popup__container_type_${props.name}`}
          name={props.name}
          noValidate>
          <h2 className='popup__title'>{props.title}</h2>
          {props.children}
          <button className='popup__button-submit' type='submit' title='Да'>
            {props.buttonTitle}
          </button>
          <button
            className='popup__button-close'
            type='button'
            title='закрыть'
            onClick={props.closeAllPopups}></button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default PopupWithForm;
