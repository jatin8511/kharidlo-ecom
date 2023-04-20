import React, { useState } from 'react'
import { useContext } from 'react'
import Cart from './Cart'
import Product from  './Product'
import { Productes } from './Contexts'
import categoryImg from './Comps/video/homeCategory.png'

import video1 from './Comps/video/KharidLoVid1.mp4'
import { Link } from 'react-router-dom'
import Products, { Shoes } from './Products'
import Search from './Comps/Search'

const Home = () => {
  const { filter } = useContext(Productes)
  const { serchFocus } = useContext(Productes)

  let product = [];

  let sortedFilter = Products.sort(() => Math.random() - 0.5);
  product = sortedFilter.slice(0, 4)


  let ShoesProduct = [];

  let sortedFilterSHoes = Shoes.sort(() => Math.random() - 0.5);
  ShoesProduct = sortedFilterSHoes.slice(0, 4)



  return (
    <>
      {serchFocus ? <Search /> :
        <div className="home">
          <div className="homeBanner">
            <video loop autoPlay muted src={video1}></video>
          </div>
          <div className="homeCategory">
            <Link to='categories'>
              <div className="img">
                <img src={categoryImg} alt="" />
              </div>
              <h3>Categories</h3>
            </Link>
          </div>
          <h1 className='ShirtsCate' data-aos='fade-down'>Shirts and T-Shirts</h1>
          <div className="ProductsWrapper">
            {
              product.map((item) => <Product item={item} />)
            }
          </div>
          <h1 className='ShirtsCate' data-aos='fade-down'>Shoes</h1>
          <div className="ProductsWrapper">
            {
              ShoesProduct.map((item) => <Product item={item} />)
            }
          </div>
        </div>
      }
    </>
  )
}

export default Home
