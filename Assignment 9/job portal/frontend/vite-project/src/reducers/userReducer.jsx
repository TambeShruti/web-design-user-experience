import { LOGIN_SUCCESS } from "../constants/userConstants";

const initialState = {
  user: null,
};

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
