import { LOGIN_SUCCESS } from "../constants/userConstants";

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: { email: user.email },
});
