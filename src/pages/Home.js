

import { StyledMain, StyledSection, StyledTable } from '../styles';

import { Link } from 'react-router-dom';


const Home = (props) => {

 
    // loading/loaded helper functions
    const loaded = () => {
        return (
<StyledMain>
     
     <StyledSection>
     
         <StyledTable>
             <thead>
                 {/* <h3>Select your favorite currency from the 250 cryptocurrencies listed by Marjet Cap. It will be listed in your dashborad with more data avilable.</h3> */}
             {/* {new Date().getMonth()}.{new Date().getDay()}.{new Date().getFullYear()}/ {new Date().getHours()}:{new Date().getMinutes()}h  */}
           



                 <tr>
                 <th>Rank</th>
                 <th>Logo</th>
                 <th>Currency</th>
                 <th>Price</th>
                 {props.user &&
                 <th>Select</th>
    }
                 </tr>
             </thead>
             <tbody>
     
                 { props.currencies.map (currency => (
                    
                         <tr key={currency._id}>
                              <td>{currency.market_cap_rank}</td>
                              <td><img alt={currency.name}  width="50px" src={currency.image}></img></td>
                              <td><Link to={`/currencies/${currency.name}`}>{currency.name}</Link></td>
                              <td>{currency.current_price}</td>
                              
                              {props.user &&
                              <td><input type="checkbox" name="box1" class="cBox" onChange={() => props.createCurrency(currency)}/> </td>
                              }
                         </tr>//conditional User.
                     ))
                 }
     
             </tbody>
         </StyledTable>
     </StyledSection>
     </StyledMain>
     

             
        );
    }

    const loading = () => <h1>Loading ...</h1>;

    // form helper functions

   

    
    return (
       
          
 props.currencies ? loaded() : loading() 
        
    );
}


export default Home;
