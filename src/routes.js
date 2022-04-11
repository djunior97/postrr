import React, { useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'

import { Home } from 'pages/Home'

export function AppRoutes() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/all')
    }
  }, [location, navigate])

  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path=":filter" element={<Home />} />
        <Route path=":filter/*" element={<Home />} />
      </Route>
    </Routes>
  )
}
