import React from 'react';
import './Assets/css/main.css';
import Navbar from './components/Navbar'
import BussinesPage from './components/BussinesPage'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <BussinesPage />
      <Footer />
    </div>
  );
}

export default App;
