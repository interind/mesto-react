import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import PropTypes from 'prop-types';

function DeleteCardPopup({
  isLoadingButton,
  isOpen,
  onClose,
  onDeleteCard,
  isCard,
}) {
  const textButton = isLoadingButton ? 'Удаляем...' : 'Да';
  const deletePopup = {
    id: 4,
    name: 'trash',
    title: 'Вы уверены?',
    buttonTitle: `${textButton}`,
  };

  function handleSubmit(evt) {
    evt.preventDefault();

    onDeleteCard(isCard);
  }
  return (
    <PopupWithForm
      key={deletePopup.id}
      name={deletePopup.name}
      title={deletePopup.title}
      buttonTitle={deletePopup.buttonTitle}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
}

DeleteCardPopup.propTypes = {
  isLoadingButton: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onDeleteCard: PropTypes.func,
  isCard: PropTypes.string,
};

export default DeleteCardPopup;
