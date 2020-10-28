import React from 'react';
import AvatarImage from '../images/profile/avatar/image_.jpg';
import PopupWithForm from './PopupWithForm';

function Main() {

  const handleEditAvatarClick = () => {
    document.querySelector('.popup_type_avatar').classList.add('popup_opened');
  };

  const handleEditProfileClick = () => {
    document.querySelector('.popup_type_profile').classList.add('popup_opened');
  };

  const handleAddPlaceClick = () => {
    
    document.querySelector('.popup_type_card').classList.add('popup_opened');
  };
  return (
    <>
      <section className='profile page__profile'>
        <img
          className='profile__avatar'
          src={AvatarImage}
          alt='Аватарка'
          onClick={handleEditAvatarClick}
        />
        <div className='profile__info'>
          <h1 className='profile__title' title='#'>
            Александр
          </h1>
          <button
            class='profile__edit-button'
            type='button'
            title='изменить данные профиля'
            onClick={handleEditProfileClick}
          ></button>
          <p className='profile__subtitle' title='#'>
            студент
          </p>
        </div>
        <button
          className='profile__add-button'
          type='button'
          title='добавить картинки'
          onClick={handleAddPlaceClick}
        ></button>
      </section>
      <div className='elements page__elements'>
        <div className='element'>
          <img className='element__pic' alt='Карточка' />
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
      </div>
      <PopupWithForm />
      <div className='popup popup_type_zoom'>
        <div className='popup__zoom'>
          <img className='popup__pic' src='#' alt='#' />
          <span className='popup__place-pic'></span>
          <button
            className='popup__button-close'
            type='button'
            title='закрыть'
          ></button>
        </div>
      </div>
    </>
  );
}

export default Main;
