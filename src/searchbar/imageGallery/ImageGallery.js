import React, { Component } from 'react';
import { ImageGalleryItem } from './imageGalleryItem/ImageGalleryItem.js';
import { Modal } from './../modal/Modal';
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  state = {
    isModalOpen: false,
    modalImages: [],
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUpdate() {
    this.state.isModalOpen
      ? window.removeEventListener('keydown', this.handleKeyPress)
      : window.addEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = evt => {
    if (evt.code !== 'Escape') {
      return;
    } else {
      this.onCloseModal();
    }
  };

  handleBackdropClick = evt => {
    if (Number(evt.target.id) !== Number(this.state.modalImages.id)) {
      return;
    }
    this.onCloseModal();
  };

  onOpenModal = evt => {
    const { images } = this.props;
    const [modalImages] = images.filter(
      image => image.id === Number(evt.target.id),
    );
    this.setState({ isModalOpen: true, modalImages });
  };

  onCloseModal = () => {
    this.setState({ isModalOpen: false });
  };
  render() {
    const { images } = this.props;
    const { isModalOpen, modalImages } = this.state;
    return (
      <>
        {isModalOpen && (
          <Modal
            modalImages={modalImages}
            onCloseModal={this.onCloseModal}
            handleKeyPress={this.handleKeyPress}
          />
        )}
        <ul className={css.ImageGallery}>
          {images.map(image => (
            <ImageGalleryItem
              handleBackdropClick={this.handleBackdropClick}
              alt={image.tags}
              src={image.webformatURL}
              id={image.id}
              key={image.id}
              onOpenModal={this.onOpenModal}
            />
          ))}
        </ul>
      </>
    );
  }
}
