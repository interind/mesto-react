import React from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext.js';
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

  const currentUser = React.useContext(CurrentUserContext);
  const [avatarUser, setAvatar] = React.useState({ avatar: '' });

  React.useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser]);

  function setAvatarUser() {
    setAvatar(inputRef.current.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

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
      <Popups.Avatar inputRef={inputRef} editAvatar={setAvatarUser} />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
