

import { StyledMain, StyledSection, StyledTable } from '../styles';

import { Link } from 'react-router-dom';


const Home = (props) => {

 
    // loading/loaded helper functions
    const loaded = () => {
        return props.currencies.map(currency => (
<StyledMain>
     
     <StyledSection>
     
         <StyledTable>
             <thead>
           
                 <tr>
                 <th>Rank</th>
                 <th>Logo</th>
                 <th>Currency</th>
                 <th>Price</th>
                 <th>Select</th>
                 </tr>
             </thead>
             <tbody>
     
                 { props.currencies.map (currency => (
                    
                         <tr key={currency._id}>
                              <td>{currency.market_cap_rank}</td>
                              <td><img alt={currency.name}  width="50px" src={currency.image}></img></td>
                              <td><Link to={`/currencies/${currency.name}`}>{currency.name}</Link></td>
                              <td>{currency.current_price}</td>
                              <td><input type="checkbox" name="box1" class="cBox" onChange={() => props.createCurrency(currency)}/> </td>
                         </tr>
                     ))
                 }
     
             </tbody>
         </StyledTable>
     </StyledSection>
     </StyledMain>
     





            // // <div key={currency._id} className="currency">
               
            // //     <Link to={`/currencies/${currency.name}`}>
                    
               
            // //         <img style={{height: 50, width: 50,  borderRadius: '50%'}} src={currency.image} alt={currency.name} />
            // //     {currency.name}
            
            // //     </Link>
                
               
            // </div>




















           
            
        ));
    }

    const loading = () => <h1>Loading ...</h1>;

    // form helper functions

   

    
    return (
       
          
 props.currencies ? loaded() : loading() 
        
    );
}


export default Home;



