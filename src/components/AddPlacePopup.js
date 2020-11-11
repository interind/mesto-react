import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { MarkupForPopups } from './MarkupForPopups.js';

function AddPlacePopup(props) {
  const textButton = props.isLoadingButton ? 'Сохранение...' : 'Сохранить';
  const placePopup = {
    id: 3,
    name: 'place',
    title: 'Новое место',
    buttonTitle: `${textButton}`,
  };

  const [namePlace, setPlace] = React.useState('');
  const [link, setLink] = React.useState('');
  let [activeButton, setActiveButton] = React.useState(true);

  function setPlaceName(evt) {
    setPlace(evt.target.value);
    evt.target.value === '' ? setActiveButton(true) : setActiveButton(false);
  }
  function setLinkPlace(evt) {
    setLink(evt.target.value);
    evt.target.value === '' ? setActiveButton(true) : setActiveButton(false);
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
      active={activeButton}
      onSubmit={handleSubmit}>
      <MarkupForPopups.Place
        place={namePlace}
        link={link}
        editPlace={setPlaceName}
        editLink={setLinkPlace}
      />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
