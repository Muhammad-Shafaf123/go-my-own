import React from 'react'
import Home from './pages/home.jsx'
import { HomeContextProvider } from './context/homeContext.js'

function App() {
  return (
    <>
      <HomeContextProvider>
        <Home />
      </HomeContextProvider>
    </>
  )
}

export default App
