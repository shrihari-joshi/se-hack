import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import 'react-slideshow-image/dist/styles.css'
import './sell.css';
import Image1 from '../images/image8.png'
import Image2 from '../images/image9.png'
import Image3 from '../images/image10.png'

const Sell = () => {

    const images = [
        Image1, Image2, Image3
    ];

    const [anchorEl, setAnchorEl] = useState(null);
    const [profileAnchorEl, setProfileAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleProfileMenuClick = (event) => {
        setProfileAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setProfileAnchorEl(null);
    };

    return (
        <div className='sell-container'>
            <header>
                <div class="inner-header">
                    <div class="container-header">
                        <div class="main-header">
                            <div class="bars" id="open">
                            
                            </div>
                            <div class="logo1">
                                <a href="#">Kisan Sangraha</a>
                            </div>
                            <nav class="list-items active" id="show">
                                <ul>
                                    <li>
                                        <Button
                                            id="home-button"
                                            aria-controls={anchorEl ? 'home-menu' : undefined}
                                            aria-haspopup="true"
                                            // onClick={handleMenuClick}
                                        >
                                            <Link to={'/sell'}>Home</Link>

                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            id="products-button"
                                            aria-controls={anchorEl ? 'products-menu' : undefined}
                                            aria-haspopup="true"
                                            onClick={handleMenuClick}
                                            className='text-white'
                                        >
                                            Products
                                        </Button>
                                        <Menu
                                            id="products-menu"
                                            anchorEl={anchorEl}
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                'aria-labelledby': 'products-button',
                                            }}
                                        >
                                            <MenuItem onClick={handleClose}>
                                                <Link to={'/addfruit'}>Fruits</Link>
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <Link to={'/addvegetable'}>Vegetables</Link>
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <Link to={'/adddairy'}>Dairy</Link>
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <Link to={'/addpoultry'}>Poultry</Link>
                                            </MenuItem>
                                        </Menu>
                                    </li>
                                    <li>
                                        <Button
                                            id="schemes-button"
                                            aria-controls={anchorEl ? 'schemes-menu' : undefined}
                                            aria-haspopup="true"
                                            // onClick={handleMenuClick}
                                        >
                                            Schemes
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            id="storage-button"
                                            aria-controls={anchorEl ? 'storage-menu' : undefined}
                                            aria-haspopup="true"
                                            // onClick={handleMenuClick}
                                        >
                                            Storage
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            id="profile-button"
                                            aria-controls={profileAnchorEl ? 'profile-menu' : undefined}
                                            aria-haspopup="true"
                                            onClick={handleProfileMenuClick}
                                        >
                                            <div className="profile"><CgProfile size={25}/></div>
                                        </Button>
                                        <Menu
                                            id="profile-menu"
                                            anchorEl={profileAnchorEl}
                                            open={Boolean(profileAnchorEl)}
                                            onClose={handleClose}
                                            MenuListProps={{
                                                'aria-labelledby': 'profile-button',
                                            }}
                                        >
                                            <MenuItem onClick={handleClose}>MyListings</MenuItem>
                                            <MenuItem onClick={handleClose}>Documents</MenuItem>
                                            <MenuItem onClick={handleClose}>LogOut</MenuItem>
                                        </Menu>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <div id="wrapper">
                <div id="slideshow">
                    <div className="logo"></div>
                </div>
            </div>
        </div>
    )
}

export default Sell;
