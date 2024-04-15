import { LOGIN_SUCCESS, VIEW_USERS } from "../constants/userConstants";

const initialState = {
  user: null,
  users: [], // Assuming users will be stored in the state
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case VIEW_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export const viewUsers = (users) => ({
  type: VIEW_USERS,
  payload: users,
});

export default userReducer;
