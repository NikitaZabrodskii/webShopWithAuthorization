export const orderActionsType = {
    ADD_TO_CART: 'ADD_TO_CART',
    DECREASE_FROM_CART: 'DECREASE_FROM_CART'
}


export const orderActions  = {
    addToCart: (item) => ({type: orderActionsType.ADD_TO_CART, payload: item }),
    
}