import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Pages/Home';
import Auth from './Components/Pages/Auth';
import {Cart} from './Components/Cart/Cart'
import {CategoryPage} from './Components/Category/CategoryPage'



function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  </div> 
  );
}

export default App;
