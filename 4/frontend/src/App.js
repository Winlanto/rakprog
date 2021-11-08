import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import AddItem from './pages/AddItem';
import Categories from './pages/Categories';
import AddCategory from './pages/AddCategory';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/cart'element={<Cart />} />
        <Route path='/add-item'element={<AddItem />} />
        <Route path='/add-category'element={<AddCategory />} />
        <Route path='/categories'element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
