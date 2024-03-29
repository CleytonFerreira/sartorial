const storeCartItems = (cartItems) => {
    const cart = cartItems.length > 0 ? cartItems : [];
    localStorage.setItem('cart', JSON.stringify(cart));
};

const sumItems = (cartItems) => {
    storeCartItems(cartItems);
    return {
        itemCount: cartItems.reduce((total, prod) => total + prod.quantity, 0),
        total: cartItems.reduce((total, prod) => total + (prod.price * prod.quantity), 0)
    };
};

let updatedCartItems = [];
let newCartItems = [];
let increaseIndex = 0;
let decreaseIndex = 0;

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            if (!state.cartItems.find(item => item.id === action.payload.id)) {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                });
            }

            return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumItems(state.cartItems)
            };

        case 'INCREASE':
            increaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            updatedCartItems = [...state.cartItems];
            updatedCartItems[increaseIndex] = {
                ...updatedCartItems[increaseIndex],
                quantity: updatedCartItems[increaseIndex].quantity + 1
            };

            return {
                ...state,
                cartItems: updatedCartItems,
                ...sumItems(updatedCartItems)
            };

        case 'DECREASE':
            decreaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            updatedCartItems = [...state.cartItems];
            if (updatedCartItems[decreaseIndex].quantity > 1) {
                updatedCartItems[decreaseIndex] = {
                    ...updatedCartItems[decreaseIndex],
                    quantity: updatedCartItems[decreaseIndex].quantity - 1
                };
            }

            return {
                ...state,
                cartItems: updatedCartItems,
                ...sumItems(updatedCartItems)
            };

        case 'REMOVE_ITEM':
            newCartItems = state.cartItems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                cartItems: [...newCartItems],
                ...sumItems(newCartItems)
            };

        case 'CLEAR':
            localStorage.removeItem('cart');
            return {
                cartItems: [],
                itemCount: 0,
                total: 0
            };

        default:
            return state;
    }
};

export { sumItems };
export default cartReducer;