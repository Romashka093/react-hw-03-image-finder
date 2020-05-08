import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

export function CustomLoader() {
  return (
    <>
      <Loader
        type="ThreeDots"
        color="#3f51b5"
        height={800}
        width={800}
        timeout={5000}
      />
    </>
  );
}
