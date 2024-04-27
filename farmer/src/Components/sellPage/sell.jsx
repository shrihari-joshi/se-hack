import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import './sell.css';
import Navbar from '../Navbar/Navbar';

const Sell = () => {
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
            <Navbar/>
        </div>
    )
}

export default Sell;
