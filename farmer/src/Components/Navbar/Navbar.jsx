import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import './Navbar.css'
const Navbar = () => {

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
    <div>
        <header>
                <div class="inner-header">
                    <div class="container-header">
                        <div class="main-header">
                            <div class="bars" id="open">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                                </svg>
                            </div>
                            <div class="logo">
                                <a href="/sell">Kisan Sangraha</a>
                            </div>
                            <nav class="list-items active" id="show">
                                <ul>
                                    <li>
                                        <Button
                                            id="home-button"
                                            aria-controls={anchorEl ? 'home-menu' : undefined}
                                            aria-haspopup="true"
                                            className='button12'
                                            // onClick={handleMenuClick}
                                        >
                                            {/* <Link to={'/home'}>Home</Link> */}
                                            <Link to={'/sell'}>Home</Link>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            id="products-button"
                                            aria-controls={anchorEl ? 'products-menu' : undefined}
                                            aria-haspopup="true"
                                            onClick={handleMenuClick}
                                        >
                                            <Link>Products</Link>
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
                                            
                                            
                                        >
                                            <Link to={'/subsidies'}>Schemes</Link>
                                        </Button>
                                    </li>
                                    <li>
                                        <Button
                                            id="storage-button"
                                            aria-controls={anchorEl ? 'storage-menu' : undefined}
                                            aria-haspopup="true"
                                           
                                        >
                                            <Link to={'/storage'}>Storage</Link>
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
    </div>
  )
}

export default Navbar