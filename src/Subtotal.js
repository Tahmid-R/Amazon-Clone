import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useDataLayerValue } from './DataLayer';
import { getBasketTotal } from './reducer';

function Subtotal() {
  const [{basket}] = useDataLayerValue();
  return (
    <div className="subtotal">
      <CurrencyFormat

      renderText={(value) => (
        <>
        <p>
          Subtotal ({basket?.length}) items: <strong>{`${value}`}</strong>
          
        </p>
        <small className="subtotal__gift">
          <input type="checkbox"/> This order contains a gift
        </small>
        
        
        
        
        </>
      )}

      decimalScale={2}
      value={getBasketTotal(basket)}
      prefix={"£"}
      displayType={"text"}
      thousandSeparator={true}
      
       />

       <button>Proceed to checkout</button>
         
        
        
    </div>
  )
}

export default Subtotal