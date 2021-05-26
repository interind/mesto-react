import React from 'react';
import PropTypes from 'prop-types';
import Popup from './Popup';

function PopupWithForm({
  active,
  name,
  title,
  onSubmit,
  buttonTitle,
  onClose,
  isOpen,
  children,
}) {
  const disabledButton = active ? 'disabled' : '';
  const classDisActive = active ? 'popup__button-submit_disabled' : '';

  return (
    <React.Fragment>
      <Popup name={name} isOpen={isOpen} onClose={onClose}>
        <form
          className={`popup__container popup__container_type_${name}`}
          name={name}
          onSubmit={onSubmit}>
          <h2 className='popup__title'>{title}</h2>
          {children}
          <button
            className={`popup__button-submit ${classDisActive}`}
            type='submit'
            title={buttonTitle}
            disabled={disabledButton}>
            {buttonTitle}
          </button>
          <button
            className='popup__button-close'
            type='button'
            title='закрыть'
            onClick={onClose}></button>
        </form>
      </Popup>
    </React.Fragment>
  );
}

PopupWithForm.propTypes = {
  active: PropTypes.bool,
  isOpen: PropTypes.bool,
  name: PropTypes.string,
  title: PropTypes.string,
  buttonTitle: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.object,
};

export default PopupWithForm;
