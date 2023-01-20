import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

import GlobalStyle from '../styles/createGlobalStyle.jsx'

import HRnet from '../components/HRnet';
import Header from '../components/Header';
import Error from './Error';
import Form from '../components/Form';
import Employees from '../components/Employees';

function GlobalRoutes() {
    return (
    <BrowserRouter>
        <GlobalStyle/>
        <Routes>
          <Route path="/" element={<><Header/><HRnet/><Form/></>}/>
          <Route path="/employee" element={<><Header/><Employees/></>}/>
          <Route path="*" element={<><Header/><Error/></>}/>
        </Routes>
    
    </BrowserRouter>
    )
}

export default GlobalRoutes