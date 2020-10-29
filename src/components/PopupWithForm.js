import React from 'react';

function PopupWithForm({ infoPopup }) {
  const closePopupClick = () => {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
  };
  return (
    <>
      <div key={infoPopup.id} className={`popup popup_type_${infoPopup.name}`}>
        <form
          className={`popup__container popup__container_type_${infoPopup.typeName}`}
          name='formProfile'
          novalidate>
          <h2 className='popup__title'>Редактировать форму</h2>
          <input
            className='popup__input'
            id='input-name'
            type='text'
            name='name'
            minlength='2'
            maxlength='40'
            placeholder='Имя'
            required
          />
          <div className='popup__error'>
            <span class='popup__input-error' id='input-name-error'></span>
          </div>
          <input
            className='popup__input'
            id='input-job'
            type='text'
            name='job'
            minlength='2'
            maxlength='200'
            placeholder='Профессия'
            required
          />
          <div className='popup__error'>
            <span class='popup__input-error' id='input-job-error'></span>
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
            title='закрыть'
            onClick={closePopupClick}></button>
        </form>
      </div>
      <div key={infoPopup.id} className={`popup popup_type_${infoPopup.name}`}>
        <form
          className={`popup__container popup__container_type_${infoPopup.typeName}`}
          name='formCard'
          novalidate>
          <h2 className='popup__title'>Новое место</h2>
          <input
            className='popup__input'
            type='text'
            placeholder='Название'
            id='input-place'
            name='place'
            minlength='1'
            maxlength='30'
            required
          />
          <div className='popup__error'>
            <span class='popup__input-error' id='input-place-error'></span>
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
            title='закрыть'
            onClick={closePopupClick}></button>
        </form>
      </div>
      <div key={infoPopup.id} className={`popup popup_type_${infoPopup.name}`}>
        <form
          className={`popup__container popup__container_type_${infoPopup.typeName}`}
          name='formAvatar'
          novalidate>
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
            <span class='popup__input-error' id='input-avatar-error'></span>
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
            title='закрыть'
            onClick={closePopupClick}></button>
        </form>
      </div>
      <div key={infoPopup.id} className={`popup popup_type_${infoPopup.name}`}>
        <form
          className={`popup__container popup__container_type_${infoPopup.typeName}`}
          name='formTrash'
          novalidate>
          <h2 className='popup__title'>Вы уверены?</h2>
          <button className='popup__button-submit' type='submit' title='Да'>
            Да
          </button>
          <button
            className='popup__button-close'
            type='button'
            title='закрыть'
            onClick={closePopupClick}></button>
        </form>
      </div>
    </>
  );
}

export default PopupWithForm;
