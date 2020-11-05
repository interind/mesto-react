import React from 'react';

function Avatar({ src, id, onEditAvatar }) {
  return (
    <img
      className='profile__avatar'
      src={src}
      alt='Аватарка'
      id={id}
      onClick={onEditAvatar}
    />
  );
}

export default Avatar;
