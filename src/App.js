import './App.css';
import Home from './Home';
import About from './About';
import Services from './Services';
import Navbar from './Navbar';
import Instant from './Instant'
import Buy from './Buy';
import Sell from './Sell';
import Error from './Error';
import Footer from './Footer';

import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route index element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='services' element={<Services/>} />
        <Route path='Instant' element={<Instant/>}/>

        <Route path='Buy' element={<Buy/>} />
        <Route path='Sell' element={<Sell/>} />

        <Route path='*' element={<Error/>} />
  
      </Routes>
      
      <Footer/>
      </BrowserRouter>
      
       
    </div>
  );
}

export default App;
