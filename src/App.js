import { useState, useEffect } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Project from './pages/Project';
import Signup from './pages/Signup';
import Song from './pages/Song';
import {auth} from './services/firebase';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
