import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/cart'element={<Cart />} />
        <Route path='/add-item'element={<div>AddItem mida pole veel valmis</div>} />
      </Routes>
    </div>
  );
}

export default App;
