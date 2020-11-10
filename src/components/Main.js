import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import Card from './Card.js';
import { Popups } from './Popups.js';
import { CurrentUserContext } from '../context/CurrentUserContext.js';

function Main({
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
  const { name, about, avatar, _id } = React.useContext(CurrentUserContext);
  return (
    <React.Fragment>
      <section className='profile page__profile'>
        <img
          className='profile__avatar'
          src={avatar}
          alt='Аватарка'
          id={_id}
          onClick={onEditAvatar}
        />
        <div className='profile__info'>
          <h1 className='profile__title' title={name}>
            {name}
          </h1>
          <button
            className='profile__edit-button'
            type='button'
            title='изменить данные профиля'
            onClick={onEditProfile}></button>
          <p className='profile__subtitle' title={about}>
            {about}
          </p>
        </div>
        <button
          className='profile__add-button'
          type='button'
          title='добавить картинки'
          onClick={onAddPlace}></button>
      </section>
      <div className='elements page__elements'>
        {cards.map((card) => {
          return (
            <Card
              onConfirmTrash={onConfirmTrash}
              card={card}
              key={card.createdAt}
              oneCardClick={handleCardClick}
            />
          );
        })}
      </div>
      <PopupWithForm
        key={placePopup.id}
        name={placePopup.name}
        title={placePopup.title}
        buttonTitle={placePopup.buttonTitle}
        isOpen={placePopup.isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <Popups.Place />
      </PopupWithForm>
      <PopupWithForm
        key={trashPopup.id}
        name={trashPopup.name}
        title={trashPopup.title}
        buttonTitle={trashPopup.buttonTitle}
        isOpen={trashPopup.isConfirmTrashPopupOpen}
        onClose={closeAllPopups}
      />

      <ImagePopup
        selectedCard={selectedCard}
        onClose={closeAllPopups}
        isOpen={isOpenCard}
      />
    </React.Fragment>
  );
}

export default Main;
