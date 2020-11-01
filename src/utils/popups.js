export let popups = {
  avatar: (
    <>
      <input
        className='popup__input'
        type='url'
        placeholder='Ссылка на картинку'
        id='input-avatar'
        name='avatar'
        required
      />
      <div className='popup__error'>
        <span className='popup__input-error' id='input-avatar-error'></span>
      </div>
      <button className='popup__button-submit' type='submit' title='сохранить'>
        Сохранить
      </button>
    </>
  ),
  profile: (
    <>
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
      <button className='popup__button-submit' type='submit' title='сохранить'>
        Сохранить
      </button>
    </>
  ),
  place: (
    <>
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
      <button className='popup__button-submit' type='submit' title='сохранить'>
        Сохранить
      </button>
    </>
  ),

  trash: (
    <>
      <button className='popup__button-submit' type='submit' title='Да'>
        Да
      </button>
    </>
  ),
};
