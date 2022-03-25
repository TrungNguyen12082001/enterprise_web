import { GET_POST_DETAIL, GET_POST_LIST } from "../constants/post-const";

const initialState = {
  postList: [],
  postDetail: {},
};

export const postReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POST_LIST: {
      state.postList = payload;
      return { ...state };
    }
    case GET_POST_DETAIL: {
      state.postDetail = payload;
      return { ...state };
    }

    default:
      return state;
  }
};
