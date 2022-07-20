const axios = require("axios").default;

export const SET_POST = "SET_REPOST";
export const SET_USER = "SET_USER";
export const SET_PHOTOS = "SET_PHOTOS";
export const SET_POST_COUNT = "SET_POST_COUNT";

export const getReposte = (page = 1) => {
  return async (dispatch) => {
    let size = 10;

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?page=" + page
    );

    dispatch({
      type: SET_POST,
      payload: response.data.splice(page * size - size, size),
    });
    dispatch({ type: SET_POST_COUNT, payload: response.data.length / size });
  };
};

export const getUser = () => {
  return async (dispatch) => {
    const userresponse = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch({ type: SET_USER, payload: userresponse.data });
  };
};

export const getPhotos = () => {
  return async (dispatch) => {
    const photoresponse = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    photoresponse.data.splice(100);
    dispatch({ type: SET_PHOTOS, payload: photoresponse.data });
  };
};
