import React, { Fragment } from 'react';

import css from './ImageGalleryItem.module.css';

export function ImageGalleryItem({
  id,
  src,
  alt,
  handleBackdropClick,
  onOpenModal,
}) {
  return (
    <Fragment>
      <li key={id} onClick={onOpenModal} className={css.ImageGalleryItem}>
        <img
          id={id}
          src={src}
          alt={alt}
          className={css.ImageGalleryItemImage}
        />
      </li>
    </Fragment>
  );
}
