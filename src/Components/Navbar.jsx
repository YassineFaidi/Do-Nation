import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isHome, setIsHome] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false); // State for menu visibility
    const location = useLocation();

    useEffect(() => {
        const handleChanges = () => {
            if (location.pathname !== '/' || window.scrollY > 50) {
                setIsHome(false);
            } else {
                setIsHome(true);
            }
        };

        window.addEventListener('scroll', handleChanges);

        handleChanges();

        return () => {
            window.removeEventListener('scroll', handleChanges);
        };
    }, [location]);

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <nav id="desktop-nav" className={`${!isHome ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
                <div className="logo">
                    <Link to="/">Donation</Link>
                </div>
                <div>
                    <ul className="nav-links">
                        <li>
                            <Link to="/">ACCUEIL</Link>
                        </li>
                        <li>
                            <Link to="/evenements">ÉVÉNEMENTS</Link>
                        </li>
                        <li>
                            <Link to="/a-propos">À PROPOS</Link>
                        </li>
                    </ul>
                </div>
                <div className="nav-icons">
                    <a id="social-icons" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a id="social-icons" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a id="social-icons" href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-tiktok"></i>
                    </a>
                    <a className='hamburger-container' onClick={toggleMenu}>
                        <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'} id="hamburger"></i>
                    </a>
                </div>
            </nav>
            <div className={`mobile-menu ${menuOpen ? 'show' : ''}`} id="mobile-menu">
                <ul>
                    <li><Link to="/" onClick={closeMenu}>ACCUEIL</Link></li>
                    <li><Link to="/evenements" onClick={closeMenu}>ÉVÉNEMENTS</Link></li>
                    <li><Link to="/a-propos" onClick={closeMenu}>À PROPOS</Link></li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
