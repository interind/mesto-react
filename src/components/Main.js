import React from 'react';
import ImagePopup from './ImagePopup.js';
import Card from './Card.js';
import { CurrentUserContext } from '../context/CurrentUserContext.js';
import PropTypes from 'prop-types';

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  handleCardDelete,
  closeAllPopups,
  handleCardClick,
  selectedCard,
  isOpenCard,
  cards,
  handleCardLike,
  isOk,
}) {
  const { name, about, avatar, _id } = React.useContext(CurrentUserContext);

  return (
    <React.Fragment>
      {isOk ? (
        isOk && (
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
        )
      ) : (
        <h1
          style={{ color: '#0cf', display: 'flex', justifyContent: 'center' }}>
          /Сервер не отвечает 💤/.
        </h1>
      )}
      <div className='elements page__elements'>
        {cards.map((card) => {
          return (
            <Card
              onCardDelete={handleCardDelete}
              card={card}
              key={card.createdAt}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
            />
          );
        })}
      </div>
      <ImagePopup
        selectedCard={selectedCard}
        onClose={closeAllPopups}
        isOpen={isOpenCard}
      />
    </React.Fragment>
  );
}

Main.propTypes = {
  onEditAvatar: PropTypes.func,
  onEditProfile: PropTypes.func,
  onAddPlace: PropTypes.func,
  handleCardDelete: PropTypes.func,
  closeAllPopups: PropTypes.func,
  handleCardClick: PropTypes.func,
  selectedCard: PropTypes.object,
  isOpenCard: PropTypes.bool,
  cards: PropTypes.array,
  handleCardLike: PropTypes.func,
};

export default Main;
