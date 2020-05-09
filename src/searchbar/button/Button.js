import React from 'react';
import css from './Button.module.css';

export function Button({ handleClickButton }) {
  return (
    <>
      <button onClick={handleClickButton} className={css.Button}>
        Load more
      </button>
    </>
  );
}
