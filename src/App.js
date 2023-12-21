
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import View from './Components/View';
import Cart from './Components/Cart';
import Wishlist from './Components/Wishlist';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/view/:id' element={<View/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
    </Routes>     
      <Footer/>
    </div>
  );
}

export default App;
