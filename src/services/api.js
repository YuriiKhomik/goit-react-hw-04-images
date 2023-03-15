import axios from 'axios';

const API_KEY = '33136592-d2631d5cd8d681bee8d404da5';

const BASE_URL = 'https://pixabay.com/api/';

export const getImages = async (searchQuery, page) => {
  axios.defaults.baseURL = `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  const response = await axios.get();
  return response.data.hits;
};
