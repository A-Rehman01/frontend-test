import React from "react"
import Header from "./Header"
import { BrowserRouter } from "react-router-dom"
import Router from "./routes/Router"

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div className="container-view">
          <Router />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
