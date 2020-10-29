import React from 'react';
import AvatarImage from '../images/profile/avatar/image_.jpg';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import Card from './Card.js';

function Main({ infoPopups, onEditAvatar, onEditProfile, onAddPlace }) {
  return (
    <>
      <section className='profile page__profile'>
        <img
          className='profile__avatar'
          src={AvatarImage}
          alt='Аватарка'
          onClick={onEditAvatar}
        />
        <div className='profile__info'>
          <h1 className='profile__title' title='#'>
            Александр
          </h1>
          <button
            className='profile__edit-button'
            type='button'
            title='изменить данные профиля'
            onClick={onEditProfile}></button>
          <p className='profile__subtitle' title='#'>
            студент
          </p>
        </div>
        <button
          className='profile__add-button'
          type='button'
          title='добавить картинки'
          onClick={onAddPlace}></button>
      </section>
      <Card />
      {infoPopups.map((infoPopup) => {
        return <PopupWithForm infoPopup={infoPopup} key={infoPopup.id} />;
      })}
      <ImagePopup />
    </>
  );
}

export default Main;
