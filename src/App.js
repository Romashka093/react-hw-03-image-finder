import React, { Component } from 'react';
import * as imagesAPI from './services/images-api.js';
import { Searchbar } from './searchbar/Searchbar';
import { ErrorNotification } from './searchbar/errorNotification/ErrorNotification';
import { CustomLoader } from './searchbar/loader/CustomLoader';
import css from './App.css';

const initialState = {
  images: [],
  isLoading: false,
  error: null,
  pageNumber: 1,
  query: '',
};

export class App extends Component {
  state = {
    ...initialState,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.pageNumber !== this.state.pageNumber ||
      prevState.query !== this.state.query
    ) {
      if (prevState.query !== this.state.query) {
        this.setState({
          images: [],
          pageNumber: 1,
        });
      }
      this.setState({ isLoading: true });
    }
  }

  updateQuery = value => {
    this.setState({
      query: value,
    });
  };

  getImages = async searchQuery => {
    this.setState({ isLoading: true });
    try {
      const takeImages = await imagesAPI.fetchImages(
        searchQuery,
        this.state.pageNumber,
      );

      this.setState(prevState => ({
        images: [...prevState.images, ...takeImages.data.hits],
        pageNumber: prevState.pageNumber + 1,
      }));
    } catch (error) {
      console.log(error);
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { images, isLoading, error, pageNumber } = this.state;
    return (
      <div className={css.App}>
        <Searchbar
          initialState={initialState}
          onSubmit={this.getImages}
          images={images}
          pageNumber={pageNumber}
          updateQuery={this.updateQuery}
        />
        {error && <ErrorNotification text={error.message} />}
        {isLoading && <CustomLoader />}
      </div>
    );
  }
}
