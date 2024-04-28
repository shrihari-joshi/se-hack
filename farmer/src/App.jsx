import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Bin from './Components/Bin/Bin';
import FarmerDashBoard from './Components/FarmerDashBoard/FarmerDashBoard';
import Login from './Components/SignIn/Login/Login'
import Home from './Components/Home';
import Addvege from './Components/Vegetables/Addvege'
import Fruits from './Components/Fruits/Fruits';
import Vegetables from './Components/Vegetables/Vegetables';
import MilkProducts from './Components/MilkProducts/MilkProducts';
import Poultry from './Components/Poultry/Poultry';
import Profile from './Components/Profile/Profile';
import Subsidies from './Components/Subsidies/Subsidies';
import Addfruit from './Components/Fruits/Addfruit';
import Register from './Components/SignIn/SignUp';
import LoginPage from './Components/SignIn/Login/Login';
import Sell from './Components/sellPage/sell';
import Storage from './Components/Storage/Storage';
import Addvege from './Components/Vegetables/Addvege';
import AddPoultry from './Components/Poultry/Addpoultry';
import Addmilk from './Components/MilkProducts/Addmilk';

function App() {
  return (
    <div className="App">


      <Router>
        <Routes>
          <Route path="/sell" element={<Home />} />
          <Route path="/" element={<FarmerDashBoard />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/bin" element={<Bin />} />
          <Route path="/milkproducts" element={<MilkProducts />} />
          <Route path="/addvegetables" element={<Addvege />} />
          <Route path="/poultry" element={<Poultry />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/subsidies" element={<Subsidies />} />
          <Route path="/vegetables" element={<Vegetables />} />
          <Route path="/fruits" element={<Fruits />} />
          <Route path="/addfruit" element={<Addfruit />} />
          <Route path="/addvegetable" element={<Addvege />} />
          <Route path="/addpoultry" element={<AddPoultry />} />
          <Route path="/adddairy" element={<Addmilk />} />
          <Route path="/subsidies" element={<Subsidies />} /> 
          <Route path="/storage" element={<Storage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;