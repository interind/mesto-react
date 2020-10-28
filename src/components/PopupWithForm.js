import React from 'react';
import '../styles/index.css';
import {item} from './Item.js';


function PopupWithForm() {
  const closePopupClick = (() => {
    document.querySelector('.popup_opened').classList.remove('popup_opened');
  });
  return (
    <>
      <div key={item[0].id} className={`popup popup_type_${item[0].name}`}>
        <form
          className={`popup__container popup__container_type_${item[0].name}`}
          name={`${item[0].form}`}
          novalidate
        >
          <h2 className='popup__title'>{`${item[0].title}`}</h2>
          <input
            className='popup__input'
            id={`input-${item[0].inputOne}`}
            type='text'
            name={`${item[0].inputOne}`}
            minlength='2'
            maxlength='40'
            placeholder={`${item[0].placeholderOne}`}
            required
          />
          <div className='popup__error'>
            <span class='popup__input-error' id={`input-${item[0].inputOne}-error`}></span>
          </div>
          <input
            className='popup__input'
            id={`input-${item[0].inputTwo}`}
            type='text'
            name={`${item[0].inputTwo}`}
            minlength='2'
            maxlength='200'
            placeholder={`${item[0].placeholderTwo}`}
            required
          />
          <div className='popup__error'>
            <span class='popup__input-error' id={`input-${item[0].inputTwo}-error`}></span>
          </div>
          <button
            className='popup__button-submit'
            type='submit'
            title='сохранить'
          >
            Сохранить
          </button>
          <button
            className='popup__button-close'
            type='button'
            title='закрыть'
            onClick={closePopupClick}
          ></button>
        </form>
      </div>
      <div key={item[1].id} className={`popup popup_type_${item[1].name}`}>
        <form
          className={`popup__container popup__container_type_${item[1].name}`}
          name={`${item[1].form}`}
          novalidate
        >
          <h2 className='popup__title'>{`${item[1].title}`}</h2>
          <input
            className='popup__input'
            type='text'
            placeholder={`${item[1].placeholderOne}`}
            id={`input-${item[1].inputOne}`}
            name={`${item[1].inputOne}`}
            minlength='1'
            maxlength='30'
            required
          />
          <div className='popup__error'>
            <span class='popup__input-error' id={`input-${item[1].inputOne}-error`}></span>
          </div>
          <input
            className='popup__input'
            type='url'
            placeholder={`${item[1].placeholderTwo}`}
            id={`input-${item[1].inputTwo}`}
            name={`${item[1].inputTwo}`}
            required
          />
          <div className='popup__error'>
            <span class='popup__input-error' id={`input-${item[1].inputTwo}-error`}></span>
          </div>
          <button
            className='popup__button-submit'
            type='submit'
            title='сохранить'
          >
            Сохранить
          </button>
          <button
            className='popup__button-close'
            type='button'
            title='закрыть'
            onClick={closePopupClick}
          ></button>
        </form>
      </div>
      <div key={item[2].id} className={`popup popup_type_${item[2].name}`}>
        <form
          className={`popup__container popup__container_type_${item[2].name}`}
          name={`${item[2].form}`}
          novalidate
        >
          <h2 className='popup__title'>{`${item[2].title}`}</h2>
          <input
            className='popup__input'
            type='url'
            placeholder={`${item[2].placeholderTwo}`}
            id={`input-${item[2].inputTwo}`}
            name={`${item[2].inputTwo}`}
            required
          />
          <div className='popup__error'>
            <span class='popup__input-error' id={`input-${item[2].inputTwo}-error`}></span>
          </div>
          <button
            className='popup__button-submit'
            type='submit'
            title='сохранить'
          >
            Сохранить
          </button>
          <button
            className='popup__button-close'
            type='button'
            title='закрыть'
            onClick={closePopupClick}
          ></button>
        </form>
      </div>
      <div key={item[3].id} className={`popup popup_type_${item[3].name}`}>
        <form
          className={`popup__container popup__container_type_${item[3].name}`}
          name={`${item[3].form}`}
          novalidate
        >
          <h2 className='popup__title'>{`${item[3].title}`}</h2>
          <button className='popup__button-submit' type='submit' title='Да'>
            Да
          </button>
          <button
            className='popup__button-close'
            type='button'
            title='закрыть'
          ></button>
        </form>
    </div> 
  </>
  )
}


export default PopupWithForm;
