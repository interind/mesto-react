import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import Card from './Card.js';

function Main({
  infoPopups,
  onEditClick,
  myId,
  name,
  about,
  avatar,
  cards,
  closePopupClick,
  handleCardClick,
  selectedCard,
}) {
  return (
    <React.Fragment>
      <section className='profile page__profile'>
        <img
          className='profile__avatar'
          src={avatar}
          alt='Аватарка'
          data-id='3'
          id={myId}
          onClick={onEditClick}
        />
        <div className='profile__info'>
          <h1 className='profile__title' title='#'>
            {name}
          </h1>
          <button
            className='profile__edit-button'
            type='button'
            title='изменить данные профиля'
            data-id='1'
            onClick={onEditClick}></button>
          <p className='profile__subtitle' title='#'>
            {about}
          </p>
        </div>
        <button
          className='profile__add-button'
          type='button'
          title='добавить картинки'
          data-id='2'
          onClick={onEditClick}></button>
      </section>
      <div className='elements page__elements'>
        {cards.map((infoCards) => {
          return (
            <Card
              onEditClick={onEditClick}
              infoCards={infoCards}
              key={infoCards.createdAt}
              myId={myId}
              handleCardClick={handleCardClick}
            />
          );
        })}
      </div>
      {infoPopups.map((infoPopup, index) => {
        return (
          <PopupWithForm
            infoPopup={infoPopup}
            closePopupClick={closePopupClick}
            key={index + 1}
          />
        );
      })}
      <ImagePopup
        selectedCard={selectedCard}
        closePopupClick={closePopupClick}
      />
    </React.Fragment>
  );
}

export default Main;
