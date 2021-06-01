import React from 'react';
import PropTypes from 'prop-types';


function Form ({active, name, title, buttonTitle, onSubmit, onClose, children}) {
  const disabledButton = active ? 'disabled' : '';
  const classDisActive = active ? 'popup__button-submit_disabled' : '';
  return (
    <form
      className={`popup__container popup__container_type_${name}`}
      name={name}
      onSubmit={onSubmit}
    >
      <h2 className='popup__title'>
        {title}
      </h2>
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
        onClick={onClose}>
      </button>
     </form>
  );
}

Form.propTypes = {
  active: PropTypes.bool,
  isOpen: PropTypes.bool,
  name: PropTypes.string,
  title: PropTypes.string,
  buttonTitle: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.object,
};

export default Form;
