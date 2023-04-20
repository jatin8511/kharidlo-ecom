import React, { useContext } from 'react'
import { Productes } from '../Contexts'
import Product from '../Product'

const Search = () => {
    const {filter} = useContext(Productes)
  return (
   <div className="searchProductWrapper">
{
    filter.map((item)=><Product item = {item} />)
}

   </div>
  )
}

export default Search
