import React from 'react';

function Popups() {
  const popupAvatar = false;
  const popupProfile = false;
  const popupCard = false;
  const popupTrash = false;

  return (
    <React.Fragment>
      {popupAvatar && (
        <div className='popup popup_type_avatar'>
          <form
            className='popup__container popup__container_type_avatar'
            name='formAvatar'
            noValidate>
            <h2 className='popup__title'>Обновить аватар</h2>
            <input
              className='popup__input'
              type='url'
              placeholder='Ссылка на картинку'
              id='input-avatar'
              name='avatar'
              required
            />
            <div className='popup__error'>
              <span
                className='popup__input-error'
                id='input-avatar-error'></span>
            </div>
            <button
              className='popup__button-submit'
              type='submit'
              title='сохранить'>
              Сохранить
            </button>
            <button
              className='popup__button-close'
              type='button'
              title='закрыть'></button>
          </form>
        </div>
      )}
      {popupProfile && (
        <div className='popup popup_type_profile'>
          <form
            className='popup__container popup__container_type_profile'
            name='formProfile'
            noValidate>
            <h2 className='popup__title'>Редактировать форму</h2>
            <input
              className='popup__input'
              id='input-name'
              type='text'
              name='name'
              minLength='2'
              maxLength='40'
              placeholder='Имя'
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
              required
            />
            <div className='popup__error'>
              <span className='popup__input-error' id='input-job-error'></span>
            </div>
            <button
              className='popup__button-submit'
              type='submit'
              title='сохранить'>
              Сохранить
            </button>
            <button
              className='popup__button-close'
              type='button'
              title='закрыть'></button>
          </form>
        </div>
      )}
      {popupCard && (
        <div className='popup popup_type_card'>
          <form
            className='popup__container popup__container_type_card'
            name='formCard'
            noValidate>
            <h2 className='popup__title'>Новое место</h2>
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
              <span
                className='popup__input-error'
                id='input-place-error'></span>
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
              <span class='popup__input-error' id='input-card-error'></span>
            </div>
            <button
              className='popup__button-submit'
              type='submit'
              title='сохранить'>
              Сохранить
            </button>
            <button
              className='popup__button-close'
              type='button'
              title='закрыть'></button>
          </form>
        </div>
      )}

      {popupTrash && (
        <div className='popup popup_type_trash'>
          <form
            className='popup__container popup__container_type_trash'
            name='formTrash'
            noValidate>
            <h2 className='popup__title'>Вы уверены?</h2>
            <button className='popup__button-submit' type='submit' title='Да'>
              Да
            </button>
            <button
              className='popup__button-close'
              type='button'
              title='закрыть'></button>
          </form>
        </div>
      )}
    </React.Fragment>
  );
}

export default Popups;
