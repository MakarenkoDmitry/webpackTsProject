export let SET_LOGIN = "SET_LOGIN";
export function setLogin(user: object) {
    return {
        type: SET_LOGIN,
        payload: user
    };
}
