import React from 'react';
import './Assets/css/main.css';
import Header from './components/header/Header';
import BussinesPage from './components/business-page/BussinesPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <BussinesPage />
      <Footer />
    </div>
  )
}

export default App
