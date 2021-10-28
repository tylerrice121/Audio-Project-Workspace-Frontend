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

  const [projects, setProjects] = useState([]);

  // TODO: add heroku api url
  const API_URL = 'http://localhost:3001/api/projects'

  // projects helper functions
  const getProjects = async () => {
    const response = await fetch(API_URL);
    const projects = await response.json();
    setProjects(projects)

  };

  const createProject = async (p) => {
    await fetch(API_URL, {
      method: 'POST', 
      headers: {'Content-type': 'Application/json'},
      body: JSON.stringify(p)
    })
    getProjects()
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
    // TODO: only get contacts after a user has signed in
    getProjects();
    return () => unsubscribe();
  });


  return (
    <div className="App">
      <Header user={user}/>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/login' render={() => (
          user ? <Redirect to='/dashboard' /> : <Login />
        )} />
        <Route path='/signup' render={() => (
          user ? <Redirect to='/dashboard' /> : <Signup />
        )} />
        <Route path='/dashboard' render={() => (
          user ? (
          <Dashboard 
          projects={projects} 
          createProject={createProject}
          />) : <Redirect to='/'/>
        )} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
