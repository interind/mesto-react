import React from 'react';

export const Popups = {
  Avatar: function Avatar(props) {
    return (
      <React.Fragment>
        <input
          className='popup__input'
          type='url'
          placeholder='Ссылка на картинку'
          id='input-avatar'
          name='avatar'
          ref={props.inputRef}
          onChange={props.editAvatar}
          required
        />
        <div className='popup__error'>
          <span className='popup__input-error' id='input-avatar-error'></span>
        </div>
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
          required
        />
        <div className='popup__error'>
          <span className='popup__input-error' id='input-name-error'></span>
        </div>
        <input
          className='popup__input'
          id='input-job'
          type='text'
          name='job'
          minLength='2'
          maxLength='200'
          placeholder='Профессия'
          value={props.description}
          onChange={props.editAbout}
          required
        />
        <div className='popup__error'>
          <span className='popup__input-error' id='input-job-error'></span>
        </div>
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
          maxLength='30'
          required
        />
        <div className='popup__error'>
          <span className='popup__input-error' id='input-place-error'></span>
        </div>
        <input
          className='popup__input'
          type='url'
          placeholder='Ссылка на картинку'
          id='input-card'
          name='card'
          required
        />
        <div className='popup__error'>
          <span className='popup__input-error' id='input-card-error'></span>
        </div>
      </React.Fragment>
    );
  },
};
