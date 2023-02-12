export const initialState = {
    basket: [],
    user: null,
};

//selector function that gets basket total using reduce function, appending the amount with each item price in basket
export const getBasketTotal = (basket) =>
    basket?.reduce((amount,item) => item.price + amount, 0);


function reducer(state, action) {
    console.log(action);

    switch(action.type){
       case 'SET_USER':
        return{
            ...state,
            user: action.user,
        }
       case 'ADD_TO_BASKET':
        return{
            ...state,
            basket: [...state.basket, action.item],
            
        }

       case 'REMOVE_FROM_BASKET':

       //copying original basket to new basket
       const newBasket = [...state.basket]

       //returns an index if it has or has not found item, checks all of basketItems and checks if the id is same as action id
       const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
       console.log(index)
       
       if (index>=0){
        //if item exists in basket, remove it
            newBasket.splice(index,1);
           
       }
       else{
            console.warn(
                 `Can't remove product (id: ${action.id}) as it is not in basket.`
                );
             };


        return{
            ...state,
            basket: newBasket,
        }


       default:
        return state;
        

    }
}

export default reducer;