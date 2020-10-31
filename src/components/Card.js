import React from 'react';

function Card({ onEditClick, infoCards, myId, handleCardClick }) {
  const classTrash = [];
  const classLikes = [];
  if (infoCards._id === myId) {
    classTrash.push('element__button-trash_hidden');
    classTrash.length = 0;
  } else if (infoCards.likes.find((id) => id._id === myId)) {
    classLikes.length = 0;
    classLikes.push('element__button-like_color_black');
  }

  return (
    <div className='element'>
      <img
        className='element__pic'
        src={infoCards.link}
        alt={infoCards.name}
        onClick={handleCardClick}
      />
      <button
        className={`element__button-trash ${classTrash.join(' ')}`}
        type='button'
        data-id='4'
        onClick={onEditClick}></button>
      <div className='element__info'>
        <h2 className='element__title' title={infoCards.name}>
          {infoCards.name}
        </h2>
        <div className='element__like'>
          <button
            className={`element__button-like element__button-like_color_white ${classLikes.join(
              ' '
            )}`}
            type='button'></button>
          <span className='element__counter-like'>
            {infoCards.likes.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
