import { SET_LOGIN } from "../../action/index";
const initialState = {
    user: {}
};
export function reducer(state: any = initialState, action: any) {
    switch (action.type) {
        case SET_LOGIN:
            return {
                ...state,
                ...{
                    user: action.payload
                }
            };

        default:
            return state;
    }
}
