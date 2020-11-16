import React from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';

function ImagePopup({ selectedCard, onClose, isOpen }) {
  const popup = classes('popup popup_type_zoom', { popup_opened: isOpen });
  return (
    <div
      className={popup}
      onMouseDown={(evt) => evt.currentTarget === evt.target && onClose()}>
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

ImagePopup.propTypes = {
  selectedCard: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};

export default ImagePopup;
