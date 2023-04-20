import React from 'react'
import { useContext } from 'react'
import { Productes } from './Contexts'

const Product = ({ item}) => {
    const {AddToCart}=useContext(Productes)
    return (
        <>
            <div className="Product" data-aos="zoom-in-up">
                <div className="img">
                    <img src={item.img} alt="" />
                </div>
                <div className="pContent">
                    <h3 className="title">{item.title}</h3>
                    <p className="description">{item.description}</p>
                    <p className="price">{item.price}</p>
                    <div className="pAddToCart">
                        <button onClick={()=>AddToCart(item.id)}>Add To Cart</button>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Product
