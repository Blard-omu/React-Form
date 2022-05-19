import './App.css';
// import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Error from './Error'
// import Services from './Services';
// import Navbar from './Navbar';
// import Footer from './Footer';
import Home from './Home';
import About from './About';
import Services from './Services';
import Navbar from './Navbar';
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
        <Route path='services' element={<Services/>} />
        <Route path='*' element={<Error/>} />
  
      </Routes>
      
      <Footer/>
      </BrowserRouter>
      
       
    </div>
  );
}

export default App;
