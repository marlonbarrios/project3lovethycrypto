import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import { auth } from './services/firebase';

import './App.css';


function App() {
  
  const [ user, setUser ] = useState(null);

  const [ contacts, setContacts ] = useState([]);

  const API_URL = 'http://localhost:3001/api/contacts';
  // TODO: add the heroku API_URL

  // contacts helper functions
  const getContacts = async () => {
    if(!user) return;
    
    // get a secure id token from our firebase user
    const token = await user.getIdToken();
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
    const contacts = await response.json();
    setContacts(contacts);
  }

  const createContact = async person => {
    const data = {...person, managedBy: user.uid} // attach logged in user's uid to the data we send to the server
    await fetch(API_URL, {
      method: 'POST', 
      headers: {'Content-type': 'Application/json'},
      body: JSON.stringify(data)
    });
    getContacts(); // we can now refresh our list of contacts
  } 

  useEffect(() => {
    const unsubscribe =  auth.onAuthStateChanged(user => setUser(user));
    // TODO: only get contacts after a user has signed in
    getContacts();
    return () => unsubscribe(); // clean up action - remove observer from memory when not needed
  }, [user]);

  return (
    <>
      <Header user={user} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login" render={() => (
            user ? <Redirect to="/dashboard" /> : <Login />
          )} />
          <Route path="/dashboard" render={() => (
            user ? (
              <Dashboard 
                contacts={contacts} 
                createContact={createContact} 
              />
            ) : <Redirect to="/login" />
          )} />
        </Switch>
      <Footer />
    </>
  );
}

export default App;