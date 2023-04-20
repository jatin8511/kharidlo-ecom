import React, { useRef, useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Cart from '../Cart'
import { Productes } from '../Contexts'
import Products from '../Products'

const Navbar = () => {
    const { cart } = useContext(Productes)
    const { serchFocus } = useContext(Productes)
    const { setSerchFocus } = useContext(Productes)
    const { setFilter } = useContext(Productes)
    const [navToggle,setNavToggle]= useState(false)
    const nav = useRef()
    const FilterProduct = (e) => {
       
        const val = e.target.value
        const values = Products.filter((item) => item.title.toLowerCase().includes(val.toLowerCase()))
        setFilter(values)
    }
    const SerchFocus = () => {
        setSerchFocus(true)
    }
    const SerchBlur = (e) => {
        e.target.value=''

    }
    const SearchToHome = () => {
        setSerchFocus(false)

    }
    return (
        <>
            <div className="navbar">
                <div className="navtoggle">
                    <div onClick={()=>setNavToggle(!navToggle)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="logo">
                    <h1>
                        <Link to='/' onClick={SearchToHome}>Kharidlo</Link>
                    </h1>

                </div>
                <div className="search">
                    <input type="search" name="" id="" placeholder='Search...' onChange={FilterProduct} onBlur={SerchBlur} onFocus={SerchFocus} />
                </div>
                <div className="navLinks">
                    <ul className={navToggle? 'showNav' : ''}>
                        <li>
                            <Link to='/' onClick={SearchToHome}>Home</Link>
                        </li>
                        <li>
                            <Link to='categories'>Categories</Link>
                        </li>
                        <li>
                            <a href="about">About</a>
                        </li>
                        <li>
                            <a href="contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="cart">
                    <Link to='cart'>
                        <div><i class="fa-solid fa-cart-shopping"></i>
                            <span>{cart.length}</span></div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
