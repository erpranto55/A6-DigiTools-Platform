import './App.css'
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import State from './components/State/State';
import Products from './components/Products/Products';
import { useState } from 'react';
import Steps from './components/Steps/Steps';
import Pricing from './components/Pricing/Pricing';
import Ready from './components/Ready/Ready';


function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <header>
        <NavBar></NavBar>
        <Banner></Banner>
      </header>

      <main>
        <State></State>
        <Products cart={cart} setCart={setCart}></Products>
        <Steps></Steps>
        <Pricing></Pricing>
        <Ready></Ready>
      </main>

    </>
  )
}

export default App
