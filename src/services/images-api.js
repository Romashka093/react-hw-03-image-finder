import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchImages = (searchQuery, pageNumber) =>
  axios.get(
    `/?q=${searchQuery}&page=${pageNumber}&key=${process.env.REACT_APP_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );
