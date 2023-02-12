import React from 'react'
import { useDataLayerValue } from './DataLayer'
import './Product.css'

function Product({id, rating, price, title, image}) {

  const [{}, dispatch] =  useDataLayerValue();

  const addToBasket = () => {
    //Add item to basket

    dispatch({
        type: 'ADD_TO_BASKET',
        item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
        },
    });
    console.log(id);

  } 



  return (
    <div className="product">

        <div className="product__info">
            <p>{title}</p>
            <p className="product__infoPrice">
                <small>£</small>
                <strong>{price}</strong>
            </p>
            <div className="product__infoRating">

                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                    ))
                }


            </div>


        </div>

        <img className="product__image" src={image} alt=""/>
        <button onClick={addToBasket}>Add to Basket</button>

       
        
    </div>
  )
}

export default Product