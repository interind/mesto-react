import React from 'react';

function PopupWithForm(props) {
  const classes = []; // массив для открытия попапа
  classes.length = 0;

  props.isOpen ? classes.push('popup_opened') : classes.push(' ');

  return (
    <React.Fragment>
      <div className={`popup popup_type_${props.name} ${classes.join(' ')}`}>
        <form
          className={`popup__container popup__container_type_${props.name}`}
          name={props.name}
          noValidate>
          <h2 className='popup__title'>{props.title}</h2>
          {props.children}
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
