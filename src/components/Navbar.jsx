import React from 'react'
import LogoNav from '../assets/Logo.png'
import SearchIcon from '../assets/Search.svg'
import {useNavigate} from 'react-router-dom'
import iconFavs from '../assets/Favorites.png'

const Navbar = () => {
    const navigate = useNavigate()

    return(
        <nav className='navbar'>
            <div className="container-navbar">
                <a>
                    <img src={LogoNav} alt="" className='logo-site' />
                </a>
                <div className="input-search">
                    <input type="text" placeholder='Search' />
                    <img src={SearchIcon} alt="" />
                </div>
                <div className="navigation">
                    <a onClick={() => {navigate('/teste')}}>Home</a>
                    <a onClick={() => {navigate('/teste')}}>About</a>
                    <a onClick={() => {navigate('/teste')}}>Contact Us</a>
                    <a onClick={() => {navigate('/teste')}}>Blog</a>
                </div>
                <div className="icons">
                    <img src={iconFavs} alt="" />
                    <img src={iconFavs} alt="" />
                    <img src={iconFavs} alt="" />
                </div>
            </div>
            <div className="subnav">
                    <a className="category">
                        <img src="../../src/assets/subnav/Computers.png" alt="" className="icon-category" />
                        <span>Phones</span>
                    </a>
                    <a className="category">
                        <img src="../../src/assets/subnav/Computers.png" alt="" className="icon-category" />
                        <span>Computers</span>
                    </a>
                    <a className="category">
                        <img src="../../src/assets/subnav/Computers.png" alt="" className="icon-category" />
                        <span>Smart Watches</span>
                    </a>
                    <a className="category">
                        <img src="../../src/assets/subnav/Computers.png" alt="" className="icon-category" />
                        <span>Cameras</span>
                    </a>
                    <a className="category">
                        <img src="../../src/assets/subnav/Computers.png" alt="" className="icon-category" />
                        <span>Headphones</span>
                    </a>
                    <a className="category">
                        <img src="../../src/assets/subnav/Computers.png" alt="" className="icon-category" />
                        <span>Gaming</span>
                    </a>
            </div>
        </nav>
    )
}

export default Navbar