import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CreateUser from "./pages/CreateUser";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoredAPI from "./components/BoredAPI";
import CoffeeAPI from "./components/CoffeeAPI";
import CatAPI from "./components/TheCatAPI";
import Navbar from "./components/Navbar";
import UserProfile from "./pages/UserProfile";
import AboutPage from "./components/About";

function App() {
  // JSX
  /**
   * @todo
   * - Create Route for CreateUser
   * - create route for UserProfile
   * - create route for homepage and redirect to /user
   */
  return (
    <BrowserRouter>
      {/*Should be Available on all pages  */}
      <Navbar />

      {/* APIS */}
  
      {/* <CoffeeAPI />  */}

  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} /> 
        <Route path="/user" element={<CreateUser />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/bored" element={<BoredAPI/>} />
        <Route path="/cats" element={<CatAPI/>} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
