export const initialState = {
    cart: [],
}


export  const  getCartTotal = (cart) => 
    cart?.reduce((total, item) => item.price + total, 0)


const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
            }
        case 'GO_ITEM_PAGE':
            return {
                ...state,
                itemDetails: [...state.itemDetails, action.itemDetails]
            }
        default:
            return state
    }
}

export default reducer