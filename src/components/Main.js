import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js';
import ImagePopup from './ImagePopup.js';
import { CurrentUserContext } from '../context/CurrentUserContext.js';

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  handleCardDelete,
  closeAllPopups,
  handleCardClick,
  selectedCard,
  cards,
  handleCardLike,
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
              onCardDelete={handleCardDelete}
              card={card}
              key={card.createdAt + card._id}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
            />
          );
        })}
      </div>
      <ImagePopup
        selectedCard={selectedCard}
        onClose={closeAllPopups}
      />
    </React.Fragment>
  );
}

Main.propTypes = {
  onEditAvatar: PropTypes.func.isRequired,
  onEditProfile: PropTypes.func.isRequired,
  onAddPlace: PropTypes.func.isRequired,
  handleCardDelete: PropTypes.func.isRequired,
  closeAllPopups: PropTypes.func.isRequired,
  handleCardClick: PropTypes.func.isRequired,
  selectedCard: PropTypes.object,
  cards: PropTypes.array,
  handleCardLike: PropTypes.func.isRequired,
};

export default Main;
