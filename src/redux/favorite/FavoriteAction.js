import {add, remove} from './FavoriteConstants';
export function addToFavorites(payload) {
    return {
        type: add,
        payload
    }
}

export function removeFromFavorites(payload) {
    return {
        type: remove,
        payload
    }
}