import React,{useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Banner from './components/Banner/Banner';
import Homepage from './components/Pages/Homepage/Homepage';

function App() {

  return (
    <div>
      <Header />
      <Banner />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
