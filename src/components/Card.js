import React from 'react';

function Card({ onConfirmTrash, infoCards, myId, handleCardClick }) {
  let [correct, setCorrect] = React.useState(true);

  return (
    <React.Fragment>
      {correct && (
        <div className='element'>
          <img
            className='element__pic'
            src={infoCards.link}
            alt={infoCards.name}
            onError={() => {
              setCorrect(false);
            }}
            onClick={() =>
              handleCardClick({ link: infoCards.link, name: infoCards.name })
            }
          />
          <button
            className={`element__button-trash ${
              infoCards.owner._id === myId
                ? 'element__button-trash_visible'
                : ''
            }`}
            type='button'
            onClick={onConfirmTrash}></button>
          <div className='element__info'>
            <h2 className='element__title' title={infoCards.name}>
              {infoCards.name}
            </h2>
            <div className='element__like'>
              <button
                className={`element__button-like element__button-like_color_white ${
                  infoCards.likes.find((id) => id._id === myId)
                    ? 'element__button-like_color_black'
                    : ''
                }`}
                type='button'></button>
              <span className='element__counter-like'>
                {infoCards.likes.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Card;
