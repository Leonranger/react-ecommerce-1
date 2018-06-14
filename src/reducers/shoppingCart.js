
const shoppingCartReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            var cart = state.concat(action.product);
            var json = JSON.stringify(cart);
            localStorage.setItem('cart', json);
            return cart;
        case 'REMOVE_FROM_CART':
            var cart = state.filter(({id}) => id !== action.id);
            var json = JSON.stringify(cart);
            localStorage.setItem('cart', json);
            return cart;
        case 'UPDATE_AMOUNT':
            return state.map((cart) => {
                if(cart.id === action.id){
                    return {
                        ...cart,
                        ...action.updates
                    }
                }else{
                    return cart;
                }
            });
        default: 
            return state;
    }
      
}

export default shoppingCartReducer;