import React from 'react';
import PopupWithForm from './PopupWithForm';
import { MarkupForPopups } from './MarkupForPopups.js';

function EditAvatarPopup(props) {
  const textButton = props.isLoadingButton ? 'Сохранить...' : 'Сохранить';
  const avatarPopup = {
    id: 1,
    name: 'avatar',
    title: 'Обновить аватар',
    buttonTitle: `${textButton}`,
  };

  const inputRef = React.useRef();
  const [avatarUser, setAvatar] = React.useState('');
  let [activeButton, setActiveButton] = React.useState(true);

  function setAvatarUser() {
    setAvatar(inputRef.current.value);
    inputRef.current.value === ''
      ? setActiveButton(true)
      : setActiveButton(false);
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
      onSubmit={handleSubmit}
      active={activeButton}>
      <MarkupForPopups.Avatar
        avatarUser={avatarUser}
        inputRef={inputRef}
        editAvatar={setAvatarUser}
      />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
