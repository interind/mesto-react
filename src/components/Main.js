import React from 'react';
import AvatarImage from '../images/profile/avatar/image_.jpg';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import Card from './Card.js';

function Main({ infoPopups, onEditClick }) {
  return (
    <>
      <section className='profile page__profile'>
        <img
          className='profile__avatar'
          src={AvatarImage}
          alt='Аватарка'
          data-id='3'
          onClick={onEditClick}
        />
        <div className='profile__info'>
          <h1 className='profile__title' title='#'>
            Александр
          </h1>
          <button
            className='profile__edit-button'
            type='button'
            title='изменить данные профиля'
            data-id='1'
            onClick={onEditClick}></button>
          <p className='profile__subtitle' title='#'>
            студент
          </p>
        </div>
        <button
          className='profile__add-button'
          type='button'
          title='добавить картинки'
          data-id='2'
          onClick={onEditClick}></button>
      </section>
      <Card onEditClick={onEditClick} />
      {infoPopups.map((infoPopup) => {
        return <PopupWithForm infoPopup={infoPopup} key={infoPopup.id} />;
      })}
      <ImagePopup />
    </>
  );
}

export default Main;
