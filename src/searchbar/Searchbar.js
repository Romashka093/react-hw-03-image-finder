import React, { Component } from 'react';
import { ImageGallery } from './imageGallery/ImageGallery';
import { Button } from './button/Button';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pageNumber > 2) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handleChange = evt => {
    this.setState({
      searchQuery: evt.target.value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
  };

  handleClickButton = () => {
    this.props.onSubmit(this.state.searchQuery, this.props.pageNumber);
  };

  render() {
    const { searchQuery } = this.state;
    const { images, updateQuery } = this.props;
    return (
      <>
        <header className={css.Searchbar}>
          <form onSubmit={this.handleSubmit} className={css.SearchForm}>
            <button type="submit" className={css.SearchFormButton}>
              <span className={css.SearchFormButtonLabel}>Search</span>
            </button>

            <input
              className={css.SearchFormInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={searchQuery}
              onChange={this.handleChange}
              onClick={() => {
                updateQuery(searchQuery);
              }}
            />
          </form>
        </header>
        {images.length > 0 && <ImageGallery images={images} />}
        {images.length > 11 && (
          <Button handleClickButton={this.handleClickButton} />
        )}
      </>
    );
  }
}
