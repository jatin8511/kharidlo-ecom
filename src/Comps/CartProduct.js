import React from 'react'
import { useContext } from 'react'
import { Productes } from '../Contexts'

const CartProduct = ({ item, qty, setQty, itemRemoveAlert, Inc, Dec }) => {
    const { CartRemove } = useContext(Productes)

    const { img, title, price, id,quantity } = item;

    return (
        <>
            <div className="cartProduct">
                <div className="img">
                    <img src={img} alt="" />
                </div>
                <div className="content">
                    <p className="categorypara">Shirt</p>
                    <p className='title'>{title}</p>
                </div>
                <div className="qty">
                    <p>
                        <button onClick={() => Dec(id)}>-</button>
                        <button>{quantity}</button>
                        <button onClick={() => Inc(id)}>+</button>
                    </p>
                </div>
                <div className="price">
                    <span>₹</span>
                    <span>{price * quantity}</span>

                </div>
                <div className="removeItem">
                    <button onClick={() => CartRemove({ id, itemRemoveAlert })}>Remove</button>
                </div>
            </div>
        </>
    )
}

export default CartProduct
