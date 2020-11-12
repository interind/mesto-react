import React from 'react';

export const MarkupForPopups = {
  Avatar: function Avatar(props) {
    return (
      <React.Fragment>
        <input
          className='popup__input'
          type='url'
          placeholder='Ссылка на картинку'
          id='input-avatar'
          name='avatar'
          value={props.avatarUser}
          ref={props.inputRef}
          onChange={props.editAvatar}
          onInput={props.validationAvatar}
          required
        />
        {props.avatar !== '' && (
          <div className='popup__error'>
            <span
              className='popup__input-error popup__input-error_active'
              id='input-avatar-error '>
              {props.avatarMessage}
            </span>
          </div>
        )}
      </React.Fragment>
    );
  },

  Profile: function Profile(props) {
    return (
      <React.Fragment>
        <input
          className='popup__input'
          id='input-name'
          type='text'
          name='name'
          minLength='2'
          maxLength='40'
          placeholder='Имя'
          value={props.nameProfile}
          onChange={props.editName}
          onInput={props.validationName}
          required
        />
        {props.nameProfile === '' && (
          <div className='popup__error'>
            <span
              className='popup__input-error popup__input-error_active'
              id='input-name-error'>
              {props.nameMessage}
            </span>
          </div>
        )}
        <input
          className='popup__input'
          id='input-job'
          type='text'
          name='job'
          minLength='2'
          maxLength='200'
          placeholder='Профессия'
          value={props.about}
          onChange={props.editAbout}
          onInput={props.validationAbout}
          required
        />
        {props.about === '' && (
          <div className='popup__error'>
            <span
              className='popup__input-error popup__input-error_active'
              id='input-job-error'>
              {props.aboutMessage}
            </span>
          </div>
        )}
      </React.Fragment>
    );
  },
  Place: function Place(props) {
    return (
      <React.Fragment>
        <input
          className='popup__input'
          type='text'
          placeholder='Название'
          id='input-place'
          name='place'
          minLength='1'
          value={props.place}
          maxLength='30'
          onChange={props.editPlace}
          onInput={props.validationPlace}
          required
        />
        {props.place === '' && (
          <div className='popup__error'>
            <span
              className='popup__input-error popup__input-error_active'
              id='input-place-error'>
              {props.placeMessage}
            </span>
          </div>
        )}
        <input
          className='popup__input'
          type='url'
          placeholder='Ссылка на картинку'
          id='input-card'
          value={props.link}
          name='card'
          onChange={props.editLink}
          onInput={props.validationLink}
          required
        />
        {props.link !== '' && (
          <div className='popup__error'>
            <span
              className='popup__input-error popup__input-error_active'
              id='input-card-error'>
              {props.linkMessage}
            </span>
          </div>
        )}
      </React.Fragment>
    );
  },
};
