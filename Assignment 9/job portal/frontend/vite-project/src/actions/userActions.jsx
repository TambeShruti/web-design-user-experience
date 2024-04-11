import { LOGIN_SUCCESS, VIEW_USERS } from "../constants/userConstants";

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: { email: user.email },
});

export const viewUsers = (users) => ({
  type: VIEW_USERS,
  payload: users,
});
