import React from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';

function Popup({ name, isOpen, onClose, children }) {
  const popup = classes(`popup popup_type_${name}`, { popup_opened: isOpen });
  return (
     <div
        className={popup}
        onMouseDown={(evt) => evt.currentTarget === evt.target && onClose()}>
       {children}
     </div>
  );
}

Popup.propTypes = {
  isOpen: PropTypes.bool,
  name: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.object,
};

export default Popup;