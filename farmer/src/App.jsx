import React, { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next"; // Assuming you're using react-i18next for internationalization
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Sell from './Components/sellPage/sell';
import Storage from './Components/Storage/Storage';
import AddPoultry from './Components/Poultry/Addpoultry';
import Addmilk from './Components/MilkProducts/Addmilk';
import KisanCare from "./Components/Kisan_Care/Kisan_Care";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient();

function App() {
    return (
      <QueryClientProvider client={queryClient}>

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
                    <Route path="/poultry" element={<Poultry />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/subsidies" element={<Subsidies />} />
                    <Route path="/vegetables" element={<Vegetables />} />
                    <Route path="/fruits" element={<Fruits />} />
                    <Route path="/addfruit" element={<Addfruit />} />
                    <Route path="/addvegetable" element={<Addvege />} />
                    <Route path="/addpoultry" element={<AddPoultry />} />
                    <Route path="/adddairy" element={<Addmilk />} />
                    <Route path="/storage" element={<Storage />} />
                    <Route path="/kisancare" element={<KisanCare />} />
                </Routes>
            </Router>
        </div>
        </QueryClientProvider>
    );
  }

export default App;
