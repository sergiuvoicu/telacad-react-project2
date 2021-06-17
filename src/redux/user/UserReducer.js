import { start,update,error } from "./UserConstants";
const initialState = {
    data: null,
    loading: false,
    error: null
};

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case start:
            return Object.assign({}, state, {
                loading: true
            });
        case update:
            return Object.assign({}, state, {
                data: action.payload,
                loading: false,
                error: null
            });
        case error:
            return Object.assign({}, state, {
                error: action.payload,
                loading: false
            })
        default:
            return state
    }
}