import React, { useContext } from 'react'
import Video1 from './Comps/video/KharidLoVid2.mp4'
import CateImg1 from './Comps/video/categoryShirt.jpg'
import CateImg2 from './Comps/video/categoryShoe.jpg'
import Products, { Shoes } from './Products'
import { Productes } from './Contexts'
import { useState } from 'react'
import Product from './Product'
import { useRef } from 'react'
import Search from './Comps/Search'

const Categories = () => {
  const {setFilter}=useContext(Productes)
  const [categories,setCategories]=useState(Products)
  const ShirtsCate = useRef()
  const { serchFocus } = useContext(Productes)

  const handleShoes = () =>{
    setCategories(Shoes)
    ShirtsCate.current.innerHTML='Shoes'
  }
  const handleShirt = () =>{
    setCategories(Products)
    ShirtsCate.current.innerHTML='Shirts and T-Shirts'

  }
  return (
    <>
      <>
      {serchFocus ? <Search /> :
        <div className="categories">
          <div className="categoriesBanner">
            <video autoPlay muted loop src={Video1}></video>
          </div>
          <h1>Categories</h1>
          <div className="category">
           
            <div className="shirts" onClick={handleShirt}>
              <div className="img"><img src={CateImg1} alt="" /></div>
              <h3>Shirt</h3>
            </div>
            <div className="Shoes" onClick={handleShoes}>
              <div className="img"><img src={CateImg2} alt="" /></div>
              <h3>Shoes</h3>
            </div>
          </div>
          <h1 className='ShirtsCate' data-aos='fade-down' ref={ShirtsCate}>Shirts and T-Shirts</h1>
          <div className="RenderCategories">
          
            {
               categories.map((item)=><Product item={item} />)
            }
          </div>
        </div>
}
      </>
    </>
  )
}

export default Categories
