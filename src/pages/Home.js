

import { StyledMain, StyledSection, StyledTable, StyledDiv } from '../styles';

import { Link } from 'react-router-dom';


const Home = (props) => {

 
    // loading/loaded helper functions
    const loaded = () => {
        return (
<StyledMain>
<StyledDiv>
                <h3>lovethycrypto is a personal cryptocurrency tracker. Signup, login and select your favorites from the 250 cryptocurrencies listed by <Link target="_bank" to={{pathname:'https://www.coinbase.com/learn/crypto-basics/what-is-market-cap'}}>Market Cap.</Link> </h3>{props.user && <h3>Click on checkmarks to select, go to "My List" and explore more data available.</h3>}
           {/* <h4>  {new Date().getMonth()}.{new Date().getDay()}.{new Date().getFullYear()}/ {new Date().getHours()}:{new Date().getMinutes()}h </h4> */}
             </StyledDiv>
     <StyledSection>

         <StyledTable>
             <thead>
                 
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
                              <td>{currency.name}</td>
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
