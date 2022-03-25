import { GET_USER_LIST } from "../constants/user-const";

const initialState = {
  userList: [],
};

export const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_LIST:
      state.userList = payload;
      return { ...state };

    default:
      return state;
  }
};
