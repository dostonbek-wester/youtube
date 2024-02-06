import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Detail from "./components/Detail/Detail";
import Searchpage from "./components/Searchpage/Searchpage";
import Sidebar from "./components/SideBar/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />  
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/watch" element={<Detail />} />
        <Route path="/search" element={<Searchpage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
