import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { MarkupForPopups } from './MarkupForPopups.js';
import { CurrentUserContext } from '../context/CurrentUserContext.js';

function EditProfilePopup(props) {
  const textButton = props.isLoadingButton ? 'Сохранение...' : 'Сохранить';
  const profile = {
    id: 2,
    name: 'profile',
    title: 'Редактировать форму',
    buttonTitle: `${textButton}`,
  };
  const currentUser = React.useContext(CurrentUserContext);
  const [nameProfile, setName] = React.useState({ name: '' });
  const [description, setDescription] = React.useState({ about: '' });
  let [activeButton, setActiveButton] = React.useState(true);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function setNameProfile(evt) {
    setName(evt.target.value);
    evt.target.value === '' ? setActiveButton(true) : setActiveButton(false);
  }
  function setDescriptionProfile(evt) {
    setDescription(evt.target.value);
    evt.target.value === '' ? setActiveButton(true) : setActiveButton(false);
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
      onSubmit={handleSubmit}
      active={activeButton}>
      <MarkupForPopups.Profile
        editName={setNameProfile}
        editAbout={setDescriptionProfile}
        nameProfile={nameProfile}
        description={description}
      />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
