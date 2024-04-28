import React, { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next"; // Assuming you're using react-i18next for internationalization
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Register from './Components/SignIn/SignUp';
import Sell from './Components/sellPage/sell';
import Storage from './Components/Storage/Storage';
import Addvege from './Components/Vegetables/Addvege';
import AddPoultry from './Components/Poultry/Addpoultry';
import Addmilk from './Components/MilkProducts/Addmilk';

// Contains the value and text for the options
// const languages = [
//     { value: "", text: "Options" },
//     { value: "en", text: "English" },
//     { value: "hi", text: "Hindi" },
//     { value: "bn", text: "Bengali" },
// ];

function App() {
  // const { t, i18n } = useTranslation();
  // const storedLang = localStorage.getItem("lang");
  // const [lang, setLang] = useState(storedLang || "en");

  // useEffect(() => {
  //     if (storedLang && lang !== storedLang) {
  //         setLang(storedLang);
  //     }
  // }, [storedLang, lang]);

  // const handleChange = (e) => {
      // const selectedLang = e.target.value;
      // setLang(selectedLang);
      // localStorage.setItem("lang", selectedLang);
      // i18n.changeLanguage(selectedLang);  };
    return (
        <div className="App">
          {/* <h1>{t("welcome")}</h1>
            <label>{t("choose")}</label>
            <select value={lang} onChange={handleChange}>
                {languages.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.text}
                    </option>
                ))}
            </select> */}
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
                </Routes>
            </Router>
        </div>
    );
}

export default App;
