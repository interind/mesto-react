import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { MarkupForPopups } from './MarkupForPopups.js';
import PropTypes from 'prop-types';

function AddPlacePopup({ isLoadingButton, isOpen, onClose, onAddPlace }) {
  const textButton = isLoadingButton ? 'Сохранение...' : 'Сохранить';
  const placePopup = {
    id: 3,
    name: 'place',
    title: 'Новое место',
    buttonTitle: `${textButton}`,
  };

  const [namePlace, setPlace] = React.useState('');
  const [link, setLink] = React.useState('');
  let [activeButton, setActiveButton] = React.useState(true);

  const [validPlace, setValidPlace] = React.useState({
    place: '',
    link: '',
  });

  function validationPlace(evt) {
    !evt.target.validity.valid
      ? setValidPlace({
          [evt.target.name]: evt.target.validationMessage,
        })
      : setValidPlace({
          [evt.target.name]: '',
        });
  }

  function setPlaceName(evt) {
    setPlace(evt.target.value);
    setActiveButton(!evt.target.value);
  }
  function setLinkPlace(evt) {
    setLink(evt.target.value);
    setActiveButton(!evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    setPlace('');
    setLink('');
    onAddPlace({
      name: namePlace,
      link: link,
    });
  }
  return (
    <PopupWithForm
      key={placePopup.id}
      name={placePopup.name}
      title={placePopup.title}
      buttonTitle={placePopup.buttonTitle}
      isOpen={isOpen}
      onClose={onClose}
      active={activeButton}
      onSubmit={handleSubmit}>
      <MarkupForPopups.Place
        place={namePlace}
        link={link}
        editPlace={setPlaceName}
        editLink={setLinkPlace}
        placeMessage={validPlace}
        validationPlace={validationPlace}
      />
    </PopupWithForm>
  );
}

AddPlacePopup.propTypes = {
  isLoadingButton: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onAddPlace: PropTypes.func.isRequired,
};

export default AddPlacePopup;
