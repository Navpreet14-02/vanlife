import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
