import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import FarmerDashBoard from './Components/FarmerDashBoard/FarmerDashBoard';
import Login from './Components/SignIn/Login'
import Home from './Components/Home';
import Fruits from './Components/Fruits/Fruits';
import Vegetables from './Components/Vegetables';
import MilkProducts from './Components/MilkProducts';
import Poultry from './Components/Poultry';
import Profile from './Components/Profile';
import Subsidies from './Components/Subsidies';



function App() {
  return (
    <div className="App">
        <FarmerDashBoard/>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/milkproducts" element={<MilkProducts />} />
                <Route path="/poultry" element={<Poultry />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/subsidies" element={<Subsidies />} />
                <Route path="/vegetables" element={<Vegetables />} />
                <Route path="/fruits" element={<Fruits />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;