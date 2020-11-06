import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import Card from './Card.js';
import { popups } from '../utils/popups';
import Avatar from './Avatar.js';
import { CurrentUserContext } from '../context/CurrentUserContext.js';

function Main({
  avatarPopup,
  profilePopup,
  placePopup,
  trashPopup,
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onConfirmTrash,
  closeAllPopups,
  handleCardClick,
  selectedCard,
  isOpenCard,
  cards,
}) {
  const { name, avatar, _id, about } = React.useContext(CurrentUserContext);
  return (
    <React.Fragment>
      <section className='profile page__profile'>
        <Avatar src={avatar} id={_id} key={_id} onEditAvatar={onEditAvatar} />
        <div className='profile__info'>
          <h1 className='profile__title' title={name}>
            {name}
          </h1>
          <button
            className='profile__edit-button'
            type='button'
            title='изменить данные профиля'
            data-id='1'
            onClick={onEditProfile}></button>
          <p className='profile__subtitle' title={about}>
            {about}
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
              key={infoCards._id}
              myId={_id}
              handleCardClick={handleCardClick}
            />
          );
        })}
      </div>
      <PopupWithForm
        key={avatarPopup.id}
        name={avatarPopup.name}
        title={avatarPopup.title}
        buttonTitle={avatarPopup.buttonTitle}
        isOpen={avatarPopup.isEditAvatarPopupOpen}
        closeAllPopups={closeAllPopups}>
        {popups.avatar}
      </PopupWithForm>
      <PopupWithForm
        key={profilePopup.id}
        name={profilePopup.name}
        title={profilePopup.title}
        buttonTitle={profilePopup.buttonTitle}
        isOpen={profilePopup.isEditProfilePopupOpen}
        closeAllPopups={closeAllPopups}>
        {popups.profile}
      </PopupWithForm>
      <PopupWithForm
        key={placePopup.id}
        name={placePopup.name}
        title={placePopup.title}
        buttonTitle={placePopup.buttonTitle}
        isOpen={placePopup.isAddPlacePopupOpen}
        closeAllPopups={closeAllPopups}>
        {popups.place}
      </PopupWithForm>
      <PopupWithForm
        key={trashPopup.id}
        name={trashPopup.name}
        title={trashPopup.title}
        buttonTitle={trashPopup.buttonTitle}
        isOpen={trashPopup.isConfirmTrashPopupOpen}
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
