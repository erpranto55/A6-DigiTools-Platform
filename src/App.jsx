import './App.css'
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import State from './components/State/State';



function App() {

  return (
    <>
      <header>
        <NavBar></NavBar>
        <Banner></Banner>
      </header>

      <main>
        <State></State>
      </main>

    </>
  )
}

export default App
