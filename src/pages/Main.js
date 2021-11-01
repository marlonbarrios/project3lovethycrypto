import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Show from '../pages/Show';

const Main = (props) => {
    const [currencies, setCurrencies ] = useState(null); // NOTE: normally I would set this to an empty array

    const BASE_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`; // Development
    // const BASE_URL = 'https://express-people-api.herokuapp.com/people/'; // Production

    // helper functions for getting and creating people
    const getCurrencies = async () => {
        // alternative syntax for resolving all promises
        // const data = await fetch(BASE_URL).then(response => response.json());
        const response = await fetch(BASE_URL)
        const data = await response.json();
        setCurrencies(data);
    }

    const createCurrencies = async (currency) => {
        await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(currency)
        });
        
        getCurrencies(); // get people and update state after creating a person
    }

    const updateCurrencies = async (currency, id) => {
        // make put request to create people
        await fetch(BASE_URL + id, {
          method: "PUT",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(currency),
        });
        // update list of people
        getCurrencies();
      };
    
      const deleteCurrencies = async (id) => {
        // make delete request to create people
        await fetch(BASE_URL + id, {
          method: "DELETE",
        });
        // update list of people
        getCurrencies();
      };

    // make sure we get people when the application loads
    // in other words, we need a side effect to occur as a result of the page loading
    // we will use the useEffect hook to have it's effect function run on page load

    // useEffect(() => getPeople()) // why does this syntax create an infinite loop
    useEffect(() => getCurrencies(), []) // run once on page load, but not for any subsequent state changes

    return (
      
          <Switch>
            <Route exact path="/">
              <Home currencies={currencies} createCurrencies={createCurrencies} />
            </Route>
            <Route
              path="/currencies/:id"
              render={(rp) => (
                <Show
                  currencies={currencies}
                  updateCurrencies={updateCurrencies}
                  deleteCurrencies={deleteCurrencies}
                  {...rp}
                />
              )}
            />
          </Switch>
   
      );
    }
    
    export default Main;
    