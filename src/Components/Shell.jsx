import React from 'react'
import Home from '../Pages/Home';
import { Route, BrowserRouter, Routes } from "react-router-dom"

function Shell() {
  return (
    <>
    <BrowserRouter>
        <Routes>
             <Route path = "/home" element = {<Home />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Shell