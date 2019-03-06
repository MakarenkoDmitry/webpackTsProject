export let SET_USER = "SET_USER";
export function setUser(user: object) {
    return {
        type: SET_USER,
        payload: user
    };
}
