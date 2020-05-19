import React from "react"
import "./Assets/css/main.css"
import Header from "./components/header/Header.js"
import BussinesPage from "./pages/BussinesPage.js"
import Footer from "./components/footer/Footer.js"

const App = () => {
  return (
    <div className="App">
      <Header />
      <BussinesPage />
      <Footer />
    </div>
  )
}

export default App
