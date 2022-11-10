import { ArrowDropDown, Notifications, Search } from '@mui/icons-material'
import { useState } from 'react'
import './navbar.scss'
import logo from '../images/logo.png'
// https://wallpaperaccess.com/full/6075689.png
// https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
        setIsScrolled(window.scrollY === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    console.log(isScrolled);
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src= {logo} alt="netflix logo" />
                    <span>Home</span>
                    <span>TV Shows</span>
                    <span>Movies</span>
                    <span>New & Popular</span>
                    <span>My list</span>
                </div>
                <div className="right">
                    <Search className="icon" />
                    <Notifications className="icon" />
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" alt="" />
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar