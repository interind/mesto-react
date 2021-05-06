import React from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';

function ImagePopup({ selectedCard, onClose }) {
  const popup = classes('popup popup_type_zoom', { popup_opened: selectedCard });
  return (
    <div
      className={popup}
      onMouseDown={(evt) => evt.currentTarget === evt.target && onClose()}>
      <div className='popup__zoom'>
        <img
          className='popup__pic'
          src={selectedCard && selectedCard.link}
          alt={selectedCard && selectedCard.name}
        />
        <span className='popup__place-pic'>{selectedCard && selectedCard.name}</span>
        {selectedCard && (<button
            className='popup__button-close'
            type='button'
            title='закрыть'
            onClick={onClose}
          />)}
      </div>
    </div>
  );
}

ImagePopup.propTypes = {
  selectedCard: PropTypes.object || undefined,
  onClose: PropTypes.func.isRequired,
};

export default ImagePopup;
