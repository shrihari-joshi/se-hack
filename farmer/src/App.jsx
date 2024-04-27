import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Bin from './Components/Bin/Bin';
import FarmerDashBoard from './Components/FarmerDashBoard/FarmerDashBoard';
import Login from './Components/SignIn/Login/Login'
import Home from './Components/Home';
import Fruits from './Components/Fruits/Fruits';
import Vegetables from './Components/Vegetables/Vegetables';
import MilkProducts from './Components/MilkProducts/MilkProducts';
import Poultry from './Components/Poultry/Poultry';
import Profile from './Components/Profile/Profile';
import Subsidies from './Components/Subsidies/Subsidies';
import Addfruit from './Components/Fruits/Addfruit';
import Sell from './Components/sellPage/sell';
import Register from './Components/SignIn/SignUp';
import LoginPage from './Components/SignIn/Login/Login';
import ProductForm from './Components/Fruits/Addfruit';

function App() {
  return (
    <div className="App">


      <Router>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<FarmerDashBoard />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/bin" element={<Bin />} />
          <Route path="/milkproducts" element={<MilkProducts />} />
          <Route path="/poultry" element={<Poultry />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/subsidies" element={<Subsidies />} />
          <Route path="/vegetables" element={<Vegetables />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/addfruit" element={<ProductForm />} />
          {/* <Route path="/addpoultry" element={<AddP />} /> */}
          {/* <Route path="/addfruit" element={<ProductForm />} />
          <Route path="/addfruit" element={<ProductForm />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;