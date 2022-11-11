import './App.css';

import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";

import Students from './components/Students';

import ContactUs from './components/ContactUs';

import Navbar from './components/Navbar';

import Add from "./components/Add"

import Edit from './components/Edit';

import Store from './components/Redux/Store';

import {Provider} from "react-redux";



const App = () => {

  
    return (
      
        <BrowserRouter>
          <Navbar></Navbar>
          <div className="App">
          <Provider store={Store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students/>} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/students/add" element={<Add />}/>
            <Route path="students/edit" element={<Edit />} />
          </Routes>
          </Provider>
          </div>
        </BrowserRouter>
    )

  
}

export default App;
