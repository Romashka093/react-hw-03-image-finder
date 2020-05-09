import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import css from './CustomLoader.module.css';

export function CustomLoader() {
  return (
    <>
      <Loader
        className={css.Loader}
        type="ThreeDots"
        color="#3f51b5"
        height={300}
        width={300}
        timeout={5000}
      />
    </>
  );
}
