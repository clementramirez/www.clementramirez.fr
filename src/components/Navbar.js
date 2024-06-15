import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand d-flex align-items-center">
                <img src="/images/clement_cropped.png" width="35" height="35" className="d-inline-block align-top rounded-circle mx-2" alt="logo" />
                <span className="ml-2">Clément Ramirez</span>
            </Link>
            <button className="navbar-toggler" type="button" onClick={handleNavToggle}>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className='nav-link'>
                            Services
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
