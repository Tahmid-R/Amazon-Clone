import React from 'react'
import './Checkout.css'
import { useDataLayerValue } from './DataLayer'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal';

function Checkout() {
  const[{basket}] = useDataLayerValue(); 
  
  
  return (
    <div className="checkout">
        <div className="checkout_left">
        <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
         
         {basket?.length === 0 ? (
             <div className="checkout__title">
                 <h2>Your Shopping Basket is Empty</h2>
                 <p>
                     You have no items in your basket. To buy one or more items,
                     click "Add to Basket" next to the item.
                 </p>
              </div>   
         ) : (
             <div>
                 <h2 className="checkout__title">Your Shopping Basket</h2>
             
             {/*List of all Checkout Products*/} 
             
             {/*mapping all items in the basket array and passing props of item to checkout product*/}
 
             {basket?.map((item) => (
 
                 <CheckoutProduct
                 id = {item?.id}
                 title = {item?.title}
                 rating = {item?.rating}
                 price = {item?.price}
                 image = {item?.image}
                 />
             ))}
             
             
             </div>
 
         )}

        </div>
        
         {basket?.length > 0 && 
         <div className="checkout_right">
            <Subtotal/>
        </div> }       
        
        
    </div>
  )
}

export default Checkout