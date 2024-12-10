import './App.css'
import Footer from './components/Footer.jsx'
import Homepage from './components/Homepage.jsx'
import Navbar from './components/Navbar.jsx'
import Services from './components/Services.jsx'


function App() {
  
  return (
    <>
    <Navbar />
      <div>
        
        <Homepage />

        <Services />
      </div>
      <Footer />
    </>
  )
}

export default App
