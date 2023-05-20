export const sumItems = (cartItems) => {
    return {
        itemCount: cartItems.reduce((total, prod) => total + prod.quantity, 0),
        total: cartItems.reduce((total, prod) => total + (prod.price * prod.quantity), 0)
    }
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            //verifica se o item já está no carrinho
            if (!state.cartItems.find(item => item.id === action.payload.id)) {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }

            return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumItems(state.cartItems)
            }

        case 'INCREASE':
            // const increaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            // state.cartItems[increaseIndex].quantity++

            // return {
            //     ...state,
            //     cartItems: [...state.cartItems],

            //     ...sumItems(state.cartItems)
            // }

            const increaseIndex = state.cartItems.findIndex(item => item.id === action.payload.id)
            const updatedCartItems = [...state.cartItems];
            updatedCartItems[increaseIndex] = {
                ...updatedCartItems[increaseIndex],
                quantity: updatedCartItems[increaseIndex].quantity + 1
            };

            return {
                ...state,
                cartItems: updatedCartItems,
                ...sumItems(updatedCartItems)
            };
        default:
            return state;
    }
}

export default cartReducer;