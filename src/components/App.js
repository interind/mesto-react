import React from 'react';
import '../styles/index.css';

function App() {
  return (
    <div className="page">
    <header className="header page__header">
      <img className="logo header__logo" src="./images/header/logoFon.svg" alt="Логотип"/>
    </header>
    <section className="profile page__profile">
      <img className="profile__avatar" src="./images/profile/avatar/image_.jpg" alt="Аватарка"/>
      <div className="profile__info">
        <h1 className="profile__title" title="#">Александр</h1>
        <button class="profile__edit-button" type="button" title="изменить данные профиля"></button>
        <p className="profile__subtitle" title="#">студент</p>
      </div>
      <button className="profile__add-button" type="button" title="добавить картинки"></button>
    </section>
    <div className="elements page__elements">
    </div>
    <footer className="footer page__footer">
      <p className="footer__copyright">
        &copy;2020 Mesto Russia
      </p>
    </footer>
    <div className="popup popup_type_profile">
      <form className="popup__container popup__container_type_profile" name="formProfile" novalidate>
        <h2 className="popup__title">
          Редактировать форму
        </h2>
        <input className="popup__input" id="input-name" type="text" name="name" minlength="2" maxlength="40" placeholder="Имя" required/>
        <div className="popup__error"><span class="popup__input-error" id="input-name-error"></span></div>
        <input className="popup__input" id="input-job" type="text" name="job" minlength="2" maxlength="200" placeholder="Профессия" required/>
        <div className="popup__error"><span class="popup__input-error" id="input-job-error"></span></div>
        <button className="popup__button-submit" type="submit" title="сохранить">Сохранить</button>
        <button className="popup__button-close" type="button" title="закрыть"></button>
      </form>
    </div>
    <div className="popup popup_type_card">
      <form className="popup__container popup__container_type_card" name="formCard" novalidate>
        <h2 className="popup__title">
          Новое место
        </h2>
        <input className="popup__input" type="text" placeholder="Название" id="input-place" name="place" minlength="1" maxlength="30" required/>
        <div className="popup__error"><span class="popup__input-error" id="input-place-error"></span></div>
        <input className="popup__input" type="url" placeholder="Ссылка на картинку" id="input-card" name="card" required/>
        <div className="popup__error"><span class="popup__input-error" id="input-card-error"></span></div>
        <button className="popup__button-submit" type="submit" title="сохранить">Сохранить</button>
        <button className="popup__button-close" type="button" title="закрыть"></button>
      </form>
    </div>
    <div className="popup popup_type_avatar">
      <form className="popup__container popup__container_type_avatar" name="formAvatar" novalidate>
        <h2 className="popup__title">
          Обновить аватар
        </h2>
        <input className="popup__input" type="url" placeholder="Ссылка на картинку" id="input-avatar" name="avatar" required/>
        <div className="popup__error"><span class="popup__input-error" id="input-avatar-error"></span></div>
        <button className="popup__button-submit" type="submit" title="сохранить">Сохранить</button>
        <button className="popup__button-close" type="button" title="закрыть"></button>
      </form>
    </div>
    <div className="popup popup_type_trash">
      <form className="popup__container popup__container_type_trash" name="formTrash" novalidate>
        <h2 className="popup__title">
          Вы уверены?
        </h2>
        <button className="popup__button-submit" type="submit" title="Да">Да</button>
        <button className="popup__button-close" type="button" title="закрыть"></button>
      </form>
    </div>
    <div className="popup popup_type_zoom">
      <div className="popup__zoom">
          <img className="popup__pic" src="#" alt="#"/>
          <span className="popup__place-pic"></span>
        <button className="popup__button-close" type="button" title="закрыть"></button>
      </div>
    </div>
    <template id="card">
      <div className="element">
        <img className="element__pic"/>
        <button className="element__button-trash" type="button"></button>
        <div className="element__info">
          <h2  className="element__title" title="#">
          </h2>
          <div className="element__like">
            <button className="element__button-like element__button-like_color_white" type="button"></button>
            <span className="element__counter-like"></span>
          </div>
        </div>
      </div>
    </template>
  </div>
  );
}

export default App;
