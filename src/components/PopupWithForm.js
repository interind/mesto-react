import React from 'react';
import PropTypes from 'prop-types';
import Popup from './Popup';
import Form from './Form';

function PopupWithForm({
  active,
  name,
  title,
  onSubmit,
  buttonTitle,
  onClose,
  isOpen,
  children,
}) {
  return (
    <React.Fragment>
      <Popup name={name} isOpen={isOpen} onClose={onClose}>
        <Form
          name={name}
          active={active}
          title={title}
          buttonTitle={buttonTitle}
          onClose={onClose}
          onSubmit={onSubmit}
        >
          {children}
        </Form>
      </Popup>
    </React.Fragment>
  );
}

PopupWithForm.propTypes = {
  active: PropTypes.bool,
  isOpen: PropTypes.bool,
  name: PropTypes.string,
  title: PropTypes.string,
  buttonTitle: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.object,
};

export default PopupWithForm;
