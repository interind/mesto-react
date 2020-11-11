import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function DeleteCardPopup(props) {
  const deletePopup = {
    id: 4,
    name: 'trash',
    title: 'Вы уверены?',
    buttonTitle: 'Да',
  };

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onDeleteCard(props.isCard);
  }
  return (
    <PopupWithForm
      key={deletePopup.id}
      name={deletePopup.name}
      title={deletePopup.title}
      buttonTitle={deletePopup.buttonTitle}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    />
  );
}

export default DeleteCardPopup;
