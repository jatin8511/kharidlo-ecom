import logo from './logo.svg';
import './App.css';
import Navbar from './Comps/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Cart from './Cart';
import Categories from './Categories';
import { Productes } from './Contexts';
import { useEffect, useState } from 'react';
import Products, { Shoes } from './Products';
import { useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const Alert = useRef();
  const [filter, setFilter] = useState(Products);
  const [cart, setCart] = useState([{
    id: 3,
    title: 'model3',
    img: 'https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, repellat?',
    quantity: 1,
    price: 200
  }])
  const [serchFocus,setSerchFocus]=useState(false)

  useEffect(() => {
    AOS.init();
  }, [])
  const CartRemove = ({id,itemRemoveAlert }) => {
   
    setCart(cart.filter((item) => item.id !== id))

    itemRemoveAlert.current.style.display = "block";
   

    setTimeout(() => {
    
      itemRemoveAlert.current.style.display = "none";
    

    }, 800);
  }
  const AddToCart = (id) => {
    if (cart.find((x) => x.id === id)) {
      cart.find((x) => x.id === id).quantity+=1
      console.log(cart.find((x) => x.id === id))
      Alert.current.style.left = '0'
      setTimeout(() => {
        Alert.current.style.left = '-100%'
      }, 2000);
    }
    else {
      
      if(Products.find((x) => x.id === id)){
      var obj = Products.find((x) => x.id === id)
      }else{
        var obj = Shoes.find((x) => x.id === id)
      }
       
      
      setCart([...cart, obj])

    }
  }

  return (
    <>

      <BrowserRouter>
    
        <div className="offer"><h4>Get free delevery on order above Rs 499/-</h4></div>
        <div className="alert" ref={Alert}>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;item is already exists in your cart! Quantity increased..
        </div>
        <Productes.Provider value={{ filter, AddToCart, cart, setFilter, CartRemove,setSerchFocus,serchFocus}}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='cart' element={<Cart />} />
            <Route path='categories' element={<Categories />} />
          </Routes>
        </Productes.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
