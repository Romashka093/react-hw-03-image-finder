import React, { Fragment } from 'react';
import css from './Modal.module.css';

export function Modal({
  image,
  onOpenModal,
  onCloseModal,
  modalImages,
  handleKeyPress,
}) {
  return (
    <Fragment>
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
    </Fragment>
  );
}
// onClick={e => {
//   if (e.target.nodeName !== "IMG") {
//     handleClose();
//   }
// }}
// export class Modal extends Component {
// state = {
// 	isModuleOpen: false
// };
// componentDidMount() {
// 	console.log('componentDidMount');
// 	window.addEventListener('keydown', this.handleKeyPress);
// }

// componentWillUpdate() {
// 	console.log('componentWillUpdate');
// 	window.removeEventListener('keydown', this.handleKeyPress);
// }

// handleKeyPress = (evt) => {
// 	console.log('handleKeyPress');

// 	if (evt.code !== 'Escape') return;
// 	this.onCloseModal();
// };

// onOpenModal = () => {
// 	console.log('openModal');
// 	this.setState({ isModalOpen: true });
// };

// onCloseModal = () => {
// 	console.log('closeModal');
// 	this.setState({ isModalOpen: false });
// };
// 	render() {
// 		const { image, onCloseModal } = this.props;
// 		return (
// 			<div onClick={onCloseModal} className={css.Overlay}>
// 				<div className={css.Modal}>
// 					<img src={image} alt="" />
// 				</div>
// 			</div>
// 		);
// 	}
// }

// largeImageURL
