import { useState, useEffect, useRef } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Show from './pages/Show';

import { auth } from './services/firebase';

import './App.css';


function App() {
  
  const [ user, setUser ] = useState(null);

  const [ currencies, setCurrencies ] = useState([]);

  const fetchData = useRef(null);

   //const API_URL = 'http://localhost:3001/api/currencies'; // Dev URL
  
   const API_URL = 'https://love-thy-crypto.herokuapp.com/api/currencies'; // Production URL

  // contacts helper functions
  const getCurrencies = async () => {
    if(!user) return;
  console.log(user)
    // get a secure id token from our firebase user
    const token = await user.getIdToken();
    console.log(token)
    const response = await fetch(API_URL, {

      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
    const currencies = await response.json();
    console.log(currencies)
    setCurrencies(currencies);
    
  }

  const createCurrency = async currency => {
    console.log(currency)
    if(!user) return;
    const token = await user.getIdToken();
    const data = {...currency, 

    
      managedBy: user.uid
    
    } // attach logged in user's uid to the data we send to the server
    await fetch(API_URL, {
      method: 'POST', 
      headers: {
        'Content-type': 'Application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(data)
    });
    getCurrencies(); // we can now refresh our list of contacts
  } 


  const removeCurrencies = async (id) => {
 
    if(!user) return;
    const token = await user.getIdToken();
    await fetch(`${API_URL}/dashboard/${id}`, {
      method: "DELETE",
      headers: {
        'Content-type': 'Application/json',
        'Authorization': 'Bearer ' + token
      },
    });
    // update list of people
    getCurrencies();
  };


  const createNote = async (note, id) => {
    if(!user) return;
    const token = await user.getIdToken();
    const data = { ...note, createdBy: user.uid };
    await fetch(`${API_URL}/${id}`, {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(data)
    });
    getCurrencies();
  }

  // create a reference to our createContact function that persists between renders
  // this will help mitigate memory leaks
  useEffect(() => {
    fetchData.current = getCurrencies;
  });


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);

      if(user) {
        fetchData.current();
      } else {
        setCurrencies([]);
      }
      
    });
    
    // TODO: only get contacts after a user has signed in
    return () => unsubscribe(); // clean up action - remove observer from memory when not needed
  }, [user]);

  return (
    <>
      <Header user={user} />
        <Switch>
          <Route exact path="/">
       <Main createCurrency={createCurrency} user={user}/>
          </Route>
          <Route path="/login" render={() => (
            user ? <Redirect to="/" /> : <Login />
          )} />
          <Route  user={user} path="/dashboard" render={() => (
            user ? (
              <Dashboard 
              user={user}
                currencies={currencies} 
                createCurrency={createCurrency} 
                removeCurrencies={removeCurrencies}
           
              />
            ) : <Redirect to="/login" />
          )} />
          <Route path="/currencies/:id" render={(props) => (
            user ? (
              <Show 
                currency={currencies.find(currency => currency._id === props.match.params.id)} 
                createNote={createNote}
                
              />
            ) : <Redirect to="/login" />
          )} />
        </Switch>
      <Footer />
    </>
  );
}

export default App;