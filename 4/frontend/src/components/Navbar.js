import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <div className="navbar">
            <div className="logo-container">
                <Link to="/">
                        <img id="logo" src="./rakProg.png" alt="logo" />
                </Link>
            </div>
                <ul className="navbar-options">
                    <Link to="/categories">
                        <li id="categories"><h4 className="option-text">Cateories</h4></li>
                    </Link>
                    <Link to="/cart">
                        <li id="cart"><h4 className="option-text">Cart</h4></li>
                    </Link>
                    <Link to="/admin">
                        <li id="admin"><h4 className="option-text">Admin</h4></li>
                    </Link>
                </ul>
        </div>
    )
}

export default Navbar