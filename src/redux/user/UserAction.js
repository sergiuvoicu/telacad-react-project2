import { signInWithGoogle, signInWithFacebook, signOut } from '../../apis/firebase/firebase';
import {start, update, error} from './UserConstants';

function startLoading() {
    return {
        type: start
    }
}
function updateUserData(payload) {
    return {
        type: update,
        payload
    }
}
function updateUserError(payload) {
    return {
        type: error,
        payload
    }
}

export function loginUser(props) {
    return (dispatch) => {
        dispatch(startLoading());
        
        if(props === "Google"){
        signInWithGoogle().then(userData => {
            dispatch(updateUserData(userData.user));
        }).catch(error => {
            dispatch(updateUserError(error));
        });
        }
        else if(props === "Facebook"){
            signInWithFacebook().then(userData => {
                dispatch(updateUserData(userData.user));
            }).catch(error => {
                dispatch(updateUserError(error));
            });
        }
    }
}

export function logoutUser() {
    return dispatch => {
        dispatch(startLoading());

        signOut().then(() => {
            dispatch(updateUserData(null));
        }).catch((error) => {
            dispatch(updateUserError(error));
        });
    }
}