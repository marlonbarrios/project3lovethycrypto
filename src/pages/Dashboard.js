import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { StyledMain, StyledSection, StyledTable } from '../styles';



const Dashboard = (props) => {
    // console.log(props.currency)
    // const currency = props.currency;
 

const removeCurrency = (currency) => {
        props.removeCurrencies(currency._id);
        // props.history.push("/");
      };
    
    return (
        <>
        <Helmet>

            <title>Dashboard | ⚛️</title>
            <meta name="description" content="A simple dashboard for managing contacts" />
            <meta name="keywords" content="Dashboard, business, tools, customer service" />
        </Helmet>
       
       
        <StyledMain>
       
            <StyledSection>
           
                <StyledTable>
                    <thead>
                   
                        <tr>
                         
                        <th>Logo</th>
                            <th>Currency</th>
                            <th>Symbol</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>

                    </thead>
                    <tbody>

                        { props.currencies.map (currency => (
                           
                                <tr key={currency._id}>
                                     <td><img alt={currency.name}  width="50px" src={currency.image}></img></td>
                                  
                                    <td>{currency.name}</td>
                                    <td>{currency.symbol}</td>
                                   
                                    <td>{currency.current_price}</td>
                                   
                                    <td><Link to={`/currencies/${currency._id}`}>More Details</Link></td>
                                    <td><button id="delete" onClick={() =>removeCurrency(currency)}>DELETE</button></td>
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