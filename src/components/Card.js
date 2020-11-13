import React from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext.js';
import PropTypes from 'prop-types';

function Card(props) {
  const { _id } = React.useContext(CurrentUserContext);
  const [visible, setVisible] = React.useState(true);

  return (
    <React.Fragment>
      {visible && (
        <div className='element'>
          <img
            className='element__pic'
            src={props.card.link}
            alt={props.card.name}
            onError={() => {
              setVisible(false);
            }}
            onClick={() => props.onCardClick(props.card)}
          />
          <button
            className={`element__button-trash ${
              props.card.owner._id === _id
                ? 'element__button-trash_visible'
                : ''
            }`}
            type='button'
            onClick={() => props.onCardDelete(props.card)}></button>
          <div className='element__info'>
            <h2 className='element__title' title={props.card.name}>
              {props.card.name}
            </h2>
            <div className='element__like'>
              <button
                className={`element__button-like element__button-like_color_white ${
                  props.card.likes.find((id) => id._id === _id)
                    ? 'element__button-like_color_black'
                    : ''
                }`}
                type='button'
                onClick={() => props.onCardLike(props.card)}></button>
              <span
                className='element__counter-like'
                title={props.card.likes.map(
                  (like, index) => index + 1 + '🖤' + like.name
                )}>
                {props.card.likes.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  card: PropTypes.object,
  onCardClick: PropTypes.func,
  onCardDelete: PropTypes.func,
  onCardLike: PropTypes.func,
};

export default Card;
