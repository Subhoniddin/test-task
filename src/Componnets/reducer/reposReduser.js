import {
  SET_PHOTOS,
  SET_POST,
  SET_POST_COUNT,
  SET_USER,
} from "../action/repost";

const defaultSate = {
  item: [],
  user: [],
  photos: [],
  isFetching: true,
  pageSize: 10,
  totalPhotosCout: 0,
  totalPostsCount: 0,
  curentPage: [],
};

export default function repostReduser(state = defaultSate, action) {
  switch (action.type) {
    case SET_PHOTOS:
      return rePhotos(state, action);
    case SET_POST:
      return repost(state, action);
    case SET_USER:
      return reUser(state, action);
    case SET_POST_COUNT:
      return {
        ...state,
        totalPostsCount: action.payload,
      };
    default:
      return state;
  }
}

const repost = (state, action) => {
  return {
    ...state,
    item: action.payload,
  };
};

const reUser = (state, action) => {
  return {
    ...state,
    user: action.payload,
  };
};

const rePhotos = (state, action) => {
  return {
    ...state,
    photos: action.payload,
  };
};
