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
  const currentUser = React.useContext(CurrentUserContext);
  const [nameProfile, setName] = React.useState({ name: '' });
  const [description, setDescription] = React.useState({ about: '' });

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

    props.onUpdateUser({
      name: nameProfile,
      about: description,
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
