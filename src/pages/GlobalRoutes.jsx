import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import { useState } from 'react';

import GlobalStyle from '../styles/createGlobalStyle.jsx'

import HRnet from '../components/HRnet';
import Header from '../components/Header';
import Error from './Error';
import Form from '../components/Form';
import Employees from '../components/Employees';

let employees = []
let i = 0;

function GlobalRoutes() {

  const [tab, setTab] = useState(
    {
      firstName: "",
      lastName: "",
      birthDate: "",
      startDate: "",
      street: "",
      city: "",
      state: "",
      zipCode: ""
    }
  )

  class Person {
    firstName = '';
    lastName = '';
    constructor(firstName,lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
  }

  

  function onsubmit(e) {
    e.preventDefault()
    const employee= new Person(`${tab.firstName}`,`${tab.lastName}`)
    employees.push(employee)
    setTab(tab => (
      {
        ...tab, 
        ...{"firstName":``},
        ...{"lastName":``}
      }
    ))

  }
    return (
    <BrowserRouter>
        {employees.map(e => <div key={i++}>{e.firstName} {e.lastName}</div>)}
        <br/>
        <br/>
        <br/>
        {tab.firstName}<br/>
        {tab.lastName}<br/>
        {tab.birthDate}<br/>
        {tab.startDate}<br/>
        {tab.street}<br/>
        {tab.city}<br/>
        {tab.state}<br/>
        {tab.zipCode}<br/>
        <GlobalStyle/>
        <Routes>
          <Route path="/" element={
            <>
              <Header/>
              <HRnet/>
              <Form tab={tab} setTab={setTab} submit={onsubmit}/>
            </>
          }/>
          <Route path="/employee" element={<><Header/><Employees/></>}/>
          <Route path="*" element={<><Header/><Error/></>}/>
        </Routes>
    
    </BrowserRouter>
    )
}

export default GlobalRoutes