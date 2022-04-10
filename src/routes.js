import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home } from 'pages/Home'

export function AppRoutes() {
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
