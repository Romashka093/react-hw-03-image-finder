import React, { Fragment } from 'react';
import css from './Button.module.css';

export function Button({ handleClickButton }) {
  return (
    <Fragment>
      <button onClick={handleClickButton} className={css.Button}>
        Load more
      </button>
    </Fragment>
  );
}
