import React from 'react';
import PopupWithForm from './PopupWithForm';
import { Popups } from './Popups.js';

function EditAvatarPopup(props) {
  const avatarPopup = {
    id: 1,
    name: 'avatar',
    title: 'Обновить аватар',
    buttonTitle: 'Сохранить',
  };

  const inputRef = React.useRef();
  const [avatarUser, setAvatar] = React.useState('');

  function setAvatarUser() {
    setAvatar(inputRef.current.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setAvatar('');
    props.onUpdateAvatar({
      avatar: avatarUser,
    });
  }

  return (
    <PopupWithForm
      key={avatarPopup.id}
      name={avatarPopup.name}
      title={avatarPopup.title}
      buttonTitle={avatarPopup.buttonTitle}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>
      <Popups.Avatar
        avatarUser={avatarUser}
        inputRef={inputRef}
        editAvatar={setAvatarUser}
      />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
