import React from 'react';

function Card({ url, title, alt, arr }) {
  return (
    <div className='elements page__elements'>
      <div className='element'>
        <img className='element__pic' alt='Карточка' />
        <button className='element__button-trash' type='button'></button>
        <div className='element__info'>
          <h2 className='element__title' title='#'>
            карточка
          </h2>
          <div className='element__like'>
            <button
              className='element__button-like element__button-like_color_white'
              type='button'></button>
            <span className='element__counter-like'></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
