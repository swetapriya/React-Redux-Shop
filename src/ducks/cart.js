import { getProduct } from '../ducks/products';

// actions
const CART_ADD   = 'cart/ADD';
const CART_REMOVE = 'cart/REMOVE';
const CART_REDUCE = 'cart/REDUCE';
const CART_INCREASE = 'cart/INCREASE';


// reducer
const initialState = {
    items: [], // array of product ids
    number: {id: 0,value: 0}
};

export default function cart(state = initialState, action = {}) { 
    switch (action.type) {
        case CART_ADD:
            return handleCartAdd(state, action.payload);
        case CART_REMOVE:
            return handleCartRemove(state, action.payload);
        case CART_REDUCE:
            return handleCartReduce(state, action.payload);
        case CART_INCREASE:
        return handleCartIncrease(state, action.payload);
        default:
            return state;
    }
}

function handleCartAdd(state, payload) { 
    return {
        ...state,
        items: [ ...state.items, payload.productId ],
        number: {id: payload.productId, value: payload.number}
    };
}

function handleCartIncrease(state, payload) {
    return {
        ...state,
        number: {id: payload.productId, value: payload.number}
    };
}

function handleCartRemove(state, payload) {  
    return {
        ...state,
        items: state.items.filter(id => id !== payload.productId),
        number: {id: payload.productId, value: 0}
    };
}

function handleCartReduce(state, payload) {
    return {
        ...state,
        number: {id: payload.productId, value: payload.number}
    };
}

// action creators
export function addToCart(productId, number) {
    return {
        type: CART_ADD,
        payload: {
            productId,
            number
        }
    }
}

export function removeFromCart(productId) {
    return {
        type: CART_REMOVE,
        payload: {
            productId
        }
    }
}

export function reduceFromCart(productId, number) {
    return {
        type: CART_REDUCE,
        payload: {
            productId,
            number
        }
    }
}

export function increaseToCart(productId, number) {
    return {
        type: CART_INCREASE,
        payload: {
            productId,
            number
        }
    }
}
// selectors
export function isInCart(state, props) {
    return state.cart.items.indexOf(props.id) !== -1;
}

export function getItems(state, props) {
    return state.cart.items.map(id => getProduct(state, { id }));
}

export function getNumber(state, props) { 
    return state.cart.number; 
}

export function getTotal(state, props) {
        var total = 0;
        var total1 = 0;

     state.cart.items.map((id) => { 
            const item = getProduct(state, { id });
            if (id === state.cart.number.id){
                item.number = state.cart.number.value;
                total = item.number * item.price;
            }else {
                total = item.number * item.price; 
            } 
            total1 = (total1 + total);
    })
        return total1;
}
