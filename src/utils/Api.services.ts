import axios from 'axios';
const BASEURL = process.env.REACT_APP_BASE_URL;
export const API_KEY = process.env.REACT_APP_API_KEY;

export const searchMovieByName = async (query: string) => {
  try {
    const response = await axios.get(
      `${BASEURL}/search/movie?query=${query}&api_key=${API_KEY}`
    );
    return {
      status: 200,
      results: response.data.results,
      page: response.data.page,
      totalPage: response.data.total_pages,
      totalResult: response.data.total_results,
    };
  } catch (err) {
    return {
      status: 400,
      error: err,
      results: [],
      total_results: 0,
      message: 'the entered movie name or tv series does not exist',
    };
  }
};
