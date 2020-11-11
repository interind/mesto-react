import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { Popups } from './Popups';

function AddPlacePopup(props) {
  const placePopup = {
    id: 3,
    name: 'place',
    title: 'Новое место',
    buttonTitle: 'Сохранить',
  };

  const [namePlace, setPlace] = React.useState('');
  const [link, setLink] = React.useState('');

  function setPlaceName(evt) {
    setPlace(evt.target.value);
  }
  function setLinkPlace(evt) {
    setLink(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    setPlace('');
    setLink('');
    props.onAddPlace({
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
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>
      <Popups.Place
        place={namePlace}
        link={link}
        editPlace={setPlaceName}
        editLink={setLinkPlace}
      />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
