import React from 'react';

function PopupWithForm(props) {
  let isOpen = props.isOpen;

  let disabledButton = props.active ? 'disabled' : '';
  let classDisActive = props.active ? 'popup__button-submit_disabled' : '';

  return (
    <React.Fragment>
      <div
        className={`popup popup_type_${props.name} ${
          isOpen && 'popup_opened'
        }`}>
        <form
          className={`popup__container popup__container_type_${props.name}`}
          name={props.name}
          onSubmit={props.onSubmit}>
          <h2 className='popup__title'>{props.title}</h2>
          {props.children}
          <button
            className={`popup__button-submit ${classDisActive}`}
            type='submit'
            title={props.buttonTitle}
            disabled={disabledButton}>
            {props.buttonTitle}
          </button>
          <button
            className='popup__button-close'
            type='button'
            title='закрыть'
            onClick={props.onClose}></button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default PopupWithForm;
