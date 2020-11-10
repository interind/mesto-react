import React from 'react';
import PopupWithForm from './PopupWithForm';
import { Popups } from './Popups';
import { CurrentUserContext } from '../context/CurrentUserContext';

function EditProfilePopup(props) {
  const profile = {
    id: 2,
    name: 'profile',
    title: 'Редактировать форму',
    buttonTitle: 'Сохранить',
  };
  let currentUser = React.useContext(CurrentUserContext);
  let [nameProfile, setName] = React.useState({ name: '' });
  let [description, setDescription] = React.useState({
    about: '',
  });

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function setNameProfile(evt) {
    setName(evt.target.value);
  }
  function setDescriptionProfile(evt) {
    setDescription(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    setName({ name: '' });
    setDescription({ about: '' });

    props.onUpdateUser({
      nameProfile,
      description,
    });
  }

  return (
    <PopupWithForm
      key={profile.id}
      name={profile.name}
      title={profile.title}
      buttonTitle={profile.buttonTitle}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>
      <Popups.Profile
        editName={setNameProfile}
        editAbout={setDescriptionProfile}
        nameProfile={nameProfile}
        description={description}
      />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
