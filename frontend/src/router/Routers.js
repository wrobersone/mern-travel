import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Locations from '../pages/Locations'
import LocationDetails from '../pages/LocationDetails'
import Register from '../pages/Register'
import SearchResults from '../pages/Search'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/vacations" element={<Locations />} />
      <Route path="/vacations/:id" element={<LocationDetails />} />
      <Route path="/vacations/search" element={<SearchResults />} />
    </Routes>
  )
}

export default Routers
