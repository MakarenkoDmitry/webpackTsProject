import { SET_USER } from "../../action/index";
const initialState = {
    user: {}
};
export function reducer(state: any = initialState, action: any) {
    switch (action.type) {
        case SET_USER:
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
