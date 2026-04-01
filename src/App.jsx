import './App.css'
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import State from './components/State/State';
import Products from './components/Products/Products';
import { useState } from 'react';
import Steps from './components/Steps/Steps';
import Pricing from './components/Pricing/Pricing';
import Ready from './components/Ready/Ready';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <header>
        <NavBar cart={cart}></NavBar>
        <Banner></Banner>
      </header>

      <main>
        <State></State>
        <Products cart={cart} setCart={setCart}></Products>
        <Steps></Steps>
        <Pricing></Pricing>
        <Ready></Ready>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
      
      <ToastContainer />
    </>
  )
}

export default App
