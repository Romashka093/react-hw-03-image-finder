import React, { Fragment, Component } from 'react';
import { ImageGalleryItem } from './imageGalleryItem/ImageGalleryItem.js';
import { Modal } from './../modal/Modal';
import css from './ImageGallery.module.css';

// export function ImageGallery({ images }) {
// 	return (
// <Fragment>
// 	<ul className={css.ImageGallery}>
// 		<ImageGalleryItem images={images} />
// 	</ul>
// </Fragment>
// 	);
// }

export class ImageGallery extends Component {
  state = {
    isModalOpen: false,
    modalId: null,
    modalImages: [],
  };
  componentDidMount() {
    window.addEventListener('keypress', this.handleKeyPress);
    console.log('addEventListener');
  }

  componentWillUpdate() {
    this.state.isModalOpen
      ? window.removeEventListener('keypress', this.handleKeyPress)
      : window.addEventListener('keypress', this.handleKeyPress);
    console.log('removeEventListener');
  }

  handleKeyPress = evt => {
    console.log('handleKeyPress');

    console.log(evt.code);
    console.log(evt.keyCode);
    // evt.target.nodeName

    if (evt.code !== 'Escape') {
      return;
    } else {
      this.onCloseModal();
    }
  };

  handleBackdropClick = evt => {
    console.dir('handleBackdropClick currentTarget', evt.currentTarget);
    console.dir('handleBackdropClick target', evt.target);
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
    console.log('onOpenModal');
    this.setState({ isModalOpen: true, modalImages, modalId: evt.target.id });
  };

  onCloseModal = () => {
    console.log('closeModal');
    this.setState({ isModalOpen: false });
  };
  render() {
    const { images } = this.props;
    const { isModalOpen, modalId, modalImages } = this.state;
    return (
      <Fragment>
        {isModalOpen && (
          <Modal
            image={modalId}
            modalImages={modalImages}
            onOpenModal={this.onOpenModal}
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
              key={image.key}
              onOpenModal={this.onOpenModal}
            />
          ))}
        </ul>
      </Fragment>
    );
  }
}
