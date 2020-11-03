import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import Card from './Card.js';
import { popups } from '../utils/popups';

function Main({
  avatar,
  profile,
  place,
  trash,
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onConfirmTrash,
  user,
  cards,
  closeAllPopups,
  handleCardClick,
  selectedCard,
  isOpenCard,
}) {
  return (
    <React.Fragment>
      <section className='profile page__profile'>
        <img
          className='profile__avatar'
          src={user.avatar}
          alt='Аватарка'
          data-id='3'
          id={user._id}
          onClick={onEditAvatar}
        />
        <div className='profile__info'>
          <h1 className='profile__title' title={user.name}>
            {user.name}
          </h1>
          <button
            className='profile__edit-button'
            type='button'
            title='изменить данные профиля'
            data-id='1'
            onClick={onEditProfile}></button>
          <p className='profile__subtitle' title={user.about}>
            {user.about}
          </p>
        </div>
        <button
          className='profile__add-button'
          type='button'
          title='добавить картинки'
          data-id='2'
          onClick={onAddPlace}></button>
      </section>
      <div className='elements page__elements'>
        {cards.map((infoCards) => {
          return (
            <Card
              onConfirmTrash={onConfirmTrash}
              infoCards={infoCards}
              key={infoCards.createdAt}
              myId={user._id}
              handleCardClick={handleCardClick}
            />
          );
        })}
      </div>

      <PopupWithForm
        key={avatar.id}
        name={avatar.name}
        title={avatar.title}
        buttonTitle={avatar.buttonTitle}
        isOpen={avatar.isEditAvatarPopupOpen}
        closeAllPopups={closeAllPopups}>
        {popups.avatar}
      </PopupWithForm>
      <PopupWithForm
        key={profile.id}
        name={profile.name}
        title={profile.title}
        buttonTitle={profile.buttonTitle}
        isOpen={profile.isEditProfilePopupOpen}
        closeAllPopups={closeAllPopups}>
        {popups.profile}
      </PopupWithForm>
      <PopupWithForm
        key={place.id}
        name={place.name}
        title={place.title}
        buttonTitle={place.buttonTitle}
        isOpen={place.isAddPlacePopupOpen}
        closeAllPopups={closeAllPopups}>
        {popups.place}
      </PopupWithForm>
      <PopupWithForm
        key={trash.id}
        name={trash.name}
        title={trash.title}
        buttonTitle={trash.buttonTitle}
        isOpen={trash.isConfirmTrashPopupOpen}
        closeAllPopups={closeAllPopups}
      />

      <ImagePopup
        selectedCard={selectedCard}
        closeAllPopups={closeAllPopups}
        isOpen={isOpenCard}
      />
    </React.Fragment>
  );
}

export default Main;
