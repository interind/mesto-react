import React from 'react';
import PropTypes from 'prop-types';
import Popup from './Popup';

function ImagePopup({ selectedCard, onClose }) {
  return (
    <Popup name={'zoom'} isOpen={selectedCard} onClose={onClose}>
      {selectedCard && (<div className='popup__zoom'>
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
            onClick={onClose}
          />
      </div>)}
    </Popup>
  );
}

ImagePopup.propTypes = {
  selectedCard: PropTypes.object || undefined,
  onClose: PropTypes.func.isRequired,
};

export default ImagePopup;
