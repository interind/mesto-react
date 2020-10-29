export const infoPopups = [
  {
    id: 1,
    name: 'profile',
    typeName: 'profile',
    form: 'formProfile',
    inputOne: (
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
    ),
    errorOne: (
      <div className='popup__error'>
        <span class='popup__input-error' id='input-name-error'></span>
      </div>
    ),
    inputTwo: (
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
    ),
    errorTwo: (
      <div className='popup__error'>
        <span class='popup__input-error' id='input-job-error'></span>
      </div>
    ),
    title: 'Редактировать форму',
    button: 'Сохранить',
  },
  {
    id: 2,
    name: 'card',
    typeName: 'card',
    form: 'formCard',
    inputOne: (
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
    ),
    errorOne: (
      <div className='popup__error'>
        <span class='popup__input-error' id='input-name-error'></span>
      </div>
    ),
    inputTwo: (
      <input
        className='popup__input'
        type='url'
        placeholder='Ссылка на картинку'
        id='input-card'
        name='card'
        required
      />
    ),
    errorTwo: (
      <div className='popup__error'>
        <span class='popup__input-error' id='input-name-error'></span>
      </div>
    ),
    title: 'Новое место',
    button: 'Сохранить',
  },
  {
    id: 3,
    name: 'avatar',
    typeName: 'avatar',
    inputOne: (
      <input
        className='popup__input'
        type='url'
        placeholder='Ссылка на картинку'
        id='input-avatar'
        name='avatar'
        required
      />
    ),
    errorOne: (
      <div className='popup__error'>
        <span class='popup__input-error' id='input-name-error'></span>
      </div>
    ),
    form: 'formAvatar',
    inputTwo: null,
    errorTwo: null,
    title: 'Обновить аватар',
    button: 'Сохранить',
  },
  {
    id: 4,
    name: 'trash',
    typeName: 'trash',
    form: 'formTrash',
    inputOne: null,
    errorOne: null,
    inputTwo: null,
    errorTwo: null,
    title: 'Вы уверены?',
    button: 'Да',
  },
];
