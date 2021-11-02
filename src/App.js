import { useState, useEffect, useRef } from 'react';
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

  const fetchData = useRef(null);

  const API_URL = 'http://localhost:3001/api/projects'

  // const API_URL = 'https://apw-api-2344.herokuapp.com/api/projects'

  // projects helper functions
  const getProjects = async () => {
    
    if(!user) return;

    const token = await user.getIdToken();
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
    const projects = await response.json();
    setProjects(projects)

  };

  // const updateEntireProject = async () => {
  //     if(!user) return;
  //     const data = {}
  // }


  const createProject = async (p) => {
    if(!user) return;
    const data = {...p, managedBy: user.uid}
    const token = await user.getIdToken();
    await fetch(API_URL, {
      method: 'POST', 
      headers: {'Content-type': 'Application/json', 'Authorization': 'Bearer ' + token},
      body: JSON.stringify(data)
    })
    getProjects()
  }



  const createSong = async (song, id) => {
    if(!user) return;
    const data = {...song, createdBy: user.uid}
    // console.log(song)
    const token = await user.getIdToken();
    await fetch(`${API_URL}/${id}/songs`, {
      method: 'POST',
      headers: {'Content-type': 'Application/json', 'Authorization': 'Bearer ' + token},
      body: JSON.stringify(data)
    })
    getProjects();
  }

  const updateEntireProject = async (project, id) => {
    if (!user) return;
    const data = {...project}
    console.log(id)
    const token = await user.getIdToken();
    await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {'Content-type': 'Application/json', 'Authorization': 'Bearer ' + token},
      body: JSON.stringify(data)
    })
    getProjects()
  }   
  

  const updateProject = async (project, id, songId) => {
    if(!user) return;
    const data = {...project};
    // console.log(data)
    const token = await user.getIdToken();
    await fetch(`${API_URL}/${id}/songs/${songId}`, {
      method: 'PUT',
      headers: {'Content-type': 'Application/json', 'Authorization': 'Bearer ' + token},
      body: JSON.stringify(data)
    })
    getProjects()
  }


  // const deleteListItem = async (itemToDelete, id, songId) => {
  //   if(!user) return;
  //   const data = itemToDelete;
  //   console.log(data)
  //   const token = await user.getIdToken();
  //   await fetch(`${API_URL}/${id}/songs/${songId}`, {
  //     method: 'DELETE',
  //     headers: {'Content-type': 'Application/json', 'Authorization': 'Bearer ' + token},
  //     body: JSON.stringify(data)
  //   })
  //   getProjects()
  // }



  useEffect(() => {
    fetchData.current = getProjects
  })

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);

      if(user) {
        fetchData.current();
      } else {
        setProjects([])
      }
    });
    

    return () => unsubscribe();
  }, [user]);


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
          user={user}
          />) : <Redirect to='/login'/>
        )} />
          <Route 
          exact path='/project/:id/songs/:songid'
          render={(rp) => (
            user ? (
              <Song
                {...rp}
                projects={projects}
                updateProject={updateProject}
                updateEntireProject={updateEntireProject}
              />
            ) : <Redirect to='/login' />
          )}
          />  
        <Route 
          exact path='/project/:id'
          render={(rp) => (
            user ? (
              <Project 
                {...rp}
                projects={projects}
                createSong={createSong}
              />
            ) : <Redirect to='/login'/>

          )}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
