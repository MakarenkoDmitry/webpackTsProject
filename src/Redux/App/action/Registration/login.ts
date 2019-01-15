export const SET_LOGIN = "SET_LOGIN";

export function setLogin(user: Object) {
  return ({
    type: SET_LOGIN,
    payload: user
  });
}