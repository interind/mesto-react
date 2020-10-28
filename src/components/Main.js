import React from 'react';
import AvatarImage from '../images/profile/avatar/image_.jpg';

function Main() {
  return (
    <>
      <section className='profile page__profile'>
        <img
          className='profile__avatar'
          src={AvatarImage}
          alt='Аватарка'
        />
        <div className='profile__info'>
          <h1 className='profile__title' title='#'>
            Александр
          </h1>
          <button
            class='profile__edit-button'
            type='button'
            title='изменить данные профиля'
          ></button>
          <p className='profile__subtitle' title='#'>
            студент
          </p>
        </div>
        <button
          className='profile__add-button'
          type='button'
          title='добавить картинки'
        ></button>
      </section>
      <div className='elements page__elements'></div>
    </>
  );
}

export default Main;
