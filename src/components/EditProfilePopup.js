import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { MarkupForPopups } from './MarkupForPopups.js';
import { CurrentUserContext } from '../context/CurrentUserContext.js';
import PropTypes from 'prop-types';

function EditProfilePopup({ isLoadingButton, isOpen, onClose, onUpdateUser }) {
  const textButton = isLoadingButton ? 'Сохранение...' : 'Сохранить';
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
  const [validProfile, setValidProfile] = React.useState({
    name: '',
    about: '',
  });

  function validationProfile(evt) {
    !evt.target.validity.valid
      ? setValidProfile({
          [evt.target.name]: evt.target.validationMessage,
        })
      : setValidProfile({
          [evt.target.name]: '',
        });
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function setNameProfile(evt) {
    setName(evt.target.value);
    setActiveButton(!evt.target.value);
  }
  function setDescriptionProfile(evt) {
    setDescription(evt.target.value);
    setActiveButton(!evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateUser({
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
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      active={activeButton}>
      <MarkupForPopups.Profile
        editName={setNameProfile}
        editAbout={setDescriptionProfile}
        nameProfile={nameProfile}
        about={description}
        profileMessage={validProfile}
        validationProfile={validationProfile}
      />
    </PopupWithForm>
  );
}

EditProfilePopup.propTypes = {
  isLoadingButton: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
};

export default EditProfilePopup;
