import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo.jsx';

const Header = () => {
    return (
        <header className="main-header">
             <Logo className="logo-header"/>
        <nav>
            <ul>
            <li><NavLink to="/">Accueil</NavLink></li>
            <li><NavLink to="/Apropos">À propos</NavLink></li>
            </ul>
        </nav>
        </header>
    )
}

export default Header;