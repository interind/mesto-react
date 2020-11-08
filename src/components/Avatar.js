import React from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext.js';

function Avatar({ onEditAvatar }) {
  const { avatar, _id } = React.useContext(CurrentUserContext);

  return (
    <img
      className='profile__avatar'
      src={avatar}
      alt='Аватарка'
      id={_id}
      onClick={onEditAvatar}
    />
  );
}

export default Avatar;
