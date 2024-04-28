import React from 'react'
import "./FarmerDashBoard.css"
import { Link } from 'react-router-dom'
const FarmerDashBoard = () => {
    return (
        <div className='farmer-container'>
            <div className='farmer-left'>
                <div className='title-logo'>
                    <div className='logo'></div>
                    <div className='title'>Kisan Sangraha</div>
                </div>
                <nav className="navbar">
                    <div className="container pt-">
                        <ul className="nav-links">
                            {/* <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact</a></li> */}
                        </ul>
                    </div>
                </nav>
                <div className='center-farmer'>
                    <div className='f1'><p>Welcome to our farm</p></div>
                    <div className='f2'><span className='p1'>Bridging The Gap :</span><span className='p2'> Farmer To Family</span></div>
                    <div className='farmers-buttons flex gap-10'>
                        <button className="button-33" role="button"><Link to={'/login'}>SignIn</Link></button>
                        <button className="button-33" role="button"><Link to={'/signup'}>SignUp</Link></button>
                    </div>
                </div>
            </div>
            <div className='farmer-right'>
                <div className='shadow-patch'></div>
            </div>
        </div>
    )
}

export default FarmerDashBoard;