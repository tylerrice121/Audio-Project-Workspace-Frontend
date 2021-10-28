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
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
    return () => unsubscribe();
  });


  return (
    <div className="App">
      <Header user={user}/>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup' render={() => (
          user ? <Redirect to='/dashboard' /> : <Signup />
        )} />
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
