import { IModalProps } from '@interfaces/common';
import CloseIcon from '@assets/icons/close.svg';

import './styles.scss';

function Modal({ children, open, title, onClose }: IModalProps) {
  if (!open) {
    return null;
  }

  return (
    <>
      <div className="layout" />
      <div className="modal-container">
        <div className="modal-header">
          <div className="modal-header-title">{title}</div>
          <button onClick={onClose}>
            <img src={CloseIcon} alt="Close" />
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </>
  );
}

export default Modal;