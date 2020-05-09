import React from 'react';
import css from './Modal.module.css';

export function Modal({ onCloseModal, modalImages, handleKeyPress }) {
  return (
    <>
      <div
        onClick={evt => {
          if (evt.target.nodeName !== 'IMG') {
            onCloseModal();
          }
        }}
        className={css.Overlay}
      >
        <div className={css.Modal} onClick={handleKeyPress}>
          <img src={modalImages.largeImageURL} alt="" />
        </div>
      </div>
    </>
  );
}
