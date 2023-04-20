import React, { useContext, useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import CartProduct from './Comps/CartProduct'
import { Productes } from './Contexts'

const Cart = () => {
  const { cart } = useContext(Productes)
  let [subtotal, setsubtotal] = useState(0);
  let [shippingCharge, setShippingCharge] = useState(40);
  const [kn, setKn] = useState(0)

  useEffect(() => {

    cart.map((i) => {
      setsubtotal(subtotal += i.price)
    })
  }, [])
  const itemRemoveAlert = useRef();
  const Inc = (id) => {
    cart.find((x) => x.id === id).quantity++
    setsubtotal(subtotal + cart.find((x) => x.id === id).price)
    setShippingCharge(subtotal + cart.find((x) => x.id === id).price >= 499 ? 0 : 40)
    setKn(kn + 1)

  }

  const Dec = (id) => {
    if (cart.find((x) => x.id === id).quantity <= 1) {
      alert('minimum 1 quantity is required!')
    } else {
      cart.find((x) => x.id === id).quantity--
      setsubtotal(subtotal - cart.find((x) => x.id === id).price)
    setShippingCharge(subtotal - cart.find((x) => x.id === id).price >= 499 ? 0 : 40)

      setKn(kn - 1)
    }

  }


  return (
    <>

      <div className="cartMain">
        <div className="itemRemoveAlert" ref={itemRemoveAlert} data-aos='fade-up'>
          <h3>Item has been removed from cart! <span><i className="fa-solid fa-check"></i></span></h3>
        </div>
        <div className="cartProductWrapper">
          {
            cart.map((item) => <CartProduct item={item} Inc={Inc} Dec={Dec} subtotal={subtotal} itemRemoveAlert={itemRemoveAlert} />)
          }
        </div>
        <div className="cartTotal">
          <h2>Order Summary</h2>
          <div className="subtotal">
            <p>Subtotal</p>
            <p>{subtotal}</p>
          </div>
          <div className="delCharge">
            <p>Shipping Charge</p>
            <p>{shippingCharge}</p>
          </div>
          <div className="tatal">
            <h3>Total</h3>
            <p>0</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
