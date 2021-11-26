import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import AdminHome from './pages/AdminHome';
import Navbar from './components/Navbar';
import AddItem from './pages/AddItem';
import Categories from './pages/Categories';
import AddCategory from './pages/AddCategory';
import Footer from './components/Footer';
import SingleItem from './pages/SingleItem';
import EditItem from './pages/EditItem';


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
        <Route path='/admin'element={<AdminHome />} />
        <Route path='/item/:id'element={<SingleItem />} />
        <Route path='/edit-item/:id'element={<EditItem />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
