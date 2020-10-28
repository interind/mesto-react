import React from 'react';

function Template() {
  return (
    <template id='card'>
      <div className='element'>
        <img className='element__pic' />
        <button className='element__button-trash' type='button'></button>
        <div className='element__info'>
          <h2 className='element__title' title='#'></h2>
          <div className='element__like'>
            <button
              className='element__button-like element__button-like_color_white'
              type='button'
            ></button>
            <span className='element__counter-like'></span>
          </div>
        </div>
      </div>
    </template>
  );
}

export default Template;
