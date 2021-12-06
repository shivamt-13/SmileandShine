import React,{ useState } from 'react';
import './Navbar.css'
import Logo from '../../assets/logo.png';
import {GiHamburgerMenu} from 'react-icons/gi'
import Sidedrawer from './SideDrawer';

const Navbar =() =>{
    const [scrolled, setScrolled] = useState(false);
    const [showSidedrawer, setShowSidedrawer] = useState(false);
    window.onscroll = () => {
        if(window.scrollY) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }
    const closeShowSidedrawer = () => {
        setShowSidedrawer(false);
    }
    return(
        <div>
        {
            showSidedrawer ? <Sidedrawer show={showSidedrawer} closeSidedrawer={closeShowSidedrawer} /> : null
        }
        <div className={"Header " + (scrolled ? "Header_BoxShadow" : "")}>
                <div className="Header_Container">
                    <div className="Header_Logo">
                        <img src={Logo} className="navbar-logo" alt="Logo" />
                    </div>
                    <div className="Header_SideMenuBtn">
                        <button onClick={() => setShowSidedrawer(true)}>
                            <GiHamburgerMenu style={{fontSize:"2rem",fontWeight:"bold"}}/>
                        </button>
                    </div>
                    <div className="Header_LinksContainer">
                        <ul className="Header_Links">
                            <li>
                            <a href="/"> <p className="Header_Links">HOME</p></a>
                            </li>
                            <li>
                            <a href="https://rzp.io/l/ixwnVOw0"><p className="Header_Links">DONATE</p></a>
                            </li>
                            <li>
                            <a href="/about-us"><p className="Header_Links">ABOUT US</p></a>
                            </li>
                            <li>
                            <a href="/vision"><p className="Header_Links">VISION</p></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Navbar;