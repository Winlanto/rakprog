import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <div className="navbar">
            <Link to="/">
                <img className="logo" src="rakProg.png" alt="logo" />
            </Link>
                <div className="icons">
                <Link to="/categories">
                    <img className="categories" src="categories.svg" alt="categories" />
                </Link>
                <Link to="/cart">
                    <img className="cart" src="cart.svg" alt="cart" />
                </Link>
            </div>
        </div>
    )
}

export default Navbar