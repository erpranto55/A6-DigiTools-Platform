import { useState } from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar';



function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <nav>
        <NavBar cart={cart}></NavBar>
      </nav>
    </>
  )
}

export default App
