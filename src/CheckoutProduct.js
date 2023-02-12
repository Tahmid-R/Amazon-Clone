import React from 'react'
import './CheckoutProduct.css'
import { useDataLayerValue } from './DataLayer'

function CheckoutProduct({id, title, rating, price, image}) {
    
    const [{},dispatch] = useDataLayerValue();
   

    //go through basket array, match the id and splice the array 
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:id,
        });

    }

    //console.log(id.id,price, rating, image)
   
    return (
    <div className="checkoutProduct">
        
        <img className="checkoutProduct__image" src={image} alt=""/>

        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkoutProduct__price">
                <small>£</small>
                <strong>{price}</strong>
            </p>

            <div className="checkoutProduct__rating">

                {
                    Array(rating)
                   .fill()
                   .map((_) => (
                     <p>⭐</p>
                    ))
                }


            </div>

            <button onClick={removeFromBasket}>Remove from Basket</button>


        </div>

       
        
    </div>
  )
}

export default CheckoutProduct