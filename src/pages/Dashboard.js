import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledForm, StyledMain, StyledSection, StyledTable } from '../styles';


const Dashboard = (props) => {

    
    const [ formState, setFormState ] = useState({
       name: "",
       symbol: "",
       image: "",
        faved: false
    });

    // form helper functions

    const handleChange = event => {
        
        const value = event.target.name === 'faved' 
        ? event.target.checked 
        : event.target.value


        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: value
            
        }));
    }

    const handleSubmit = event => {
        event.preventDefault();
        // TODO: adds user's uid to form
        props.createCurrency(formState);
        setFormState({
            name: "",
           symbol: "",
           image: "",
            faved: false
        }); // clear form after its been submitted
    }


    return (
        <>
        <Helmet>
            <title>Dashboard | ⚛️</title>
            <meta name="description" content="A simple dashboard for managing contacts" />
            <meta name="keywords" content="Dashboard, business, tools, customer service" />
        </Helmet>
        <StyledMain>
     
            <StyledSection>
    
                <StyledForm onSubmit={handleSubmit}>
                This should come from the api, as alonf list od currencies, then the user select them with a checkbox and then they show up in favorites
                    <label>Currency Name
                        <input 
                            onChange={handleChange} 
                            value={formState.name} 
                            name="name" 
                            type="text" 
                        />
                    </label>
                    <label>Symbol
                        <input 
                            onChange={handleChange} 
                            value={formState.symbol} 
                            name="symbol" 
                            type="text" 
                        />
                    </label>
                    <label>Logo
                        <input 
                            onChange={handleChange} 
                            value={formState.image} 
                            name="image" 
                            type="url" 
                        />
                    </label>
                    <label>Current Price
                        <input 
                            onChange={handleChange} 
                            value={formState.current_price} 
                            name="current_price" 
                            type="text" 
                        />
                    </label>
                    
                    <label>Select
                        <input 
                            type="checkbox" 
                            name="faved" 
                            onChange={handleChange}
                            checked={formState.faved} 
                        />
                    </label>
                    <input type="submit" value="Add Fav!" />
                </StyledForm>
           
                <StyledTable>
                    <thead>
                    <h1>Your Favorites:</h1>
                        <tr>
                            <th>Crypto Name</th>
                            <th>Symbol</th>
                            <th>Logo</th>
                            <th>Curremt Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 

                        props.currencies.map (currency => (
                                <tr key={currency._id}>
                                    <td>{currency.name}</td>
                                    <td>{currency.symbol}</td>
                                    <td>{currency.current_price}</td>
                                    <td><img alt={currency.name}  width="50px" src={currency.image}></img></td>
                                    <td><Link to={`/currencies/${currency._id}`}>See More Details</Link></td>
                                    <td><button> delete</button></td>``
                                </tr>
                            ))
                        }
                    </tbody>
                </StyledTable>
            </StyledSection>
        </StyledMain>
    </>
    );
};

export default Dashboard;