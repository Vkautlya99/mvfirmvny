import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import MainPage from './pages/MainPage'

const App = () => {
  return (
    < >
     <BrowserRouter>
     <Routes>
      <Route index element={<MainPage/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App