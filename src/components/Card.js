import React from 'react';

function Card(props) {
  let [visible, setVisible] = React.useState(true);

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
            onClick={() => props.oneCardClick(props.card)}
          />
          <button
            className={`element__button-trash ${
              props.card.owner._id === props.myId
                ? 'element__button-trash_visible'
                : ''
            }`}
            type='button'
            onClick={props.onConfirmTrash}></button>
          <div className='element__info'>
            <h2 className='element__title' title={props.card.name}>
              {props.card.name}
            </h2>
            <div className='element__like'>
              <button
                className={`element__button-like element__button-like_color_white ${
                  props.card.likes.find((id) => id._id === props.myId)
                    ? 'element__button-like_color_black'
                    : ''
                }`}
                type='button'></button>
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

export default Card;
