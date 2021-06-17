import { add, remove } from "./CartConstants";
export function addToCart(payload) {
    return {
        type: add,
        payload
    }
}

export function removeFromCart(payload) {
    return {
        type: remove,
        payload
    }
}