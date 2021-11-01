import { Link } from 'react-router-dom';


const Home = (props) => {
   
    // loading/loaded helper functions
    const loaded = () => {
        return props.currencies.map(currency => (
            
            <div key={currency._id} className="currency">
               
                <Link to={`/currencies/${currency.name}`}>
                    
                 {currency.market_cap_rank}
                    <img style={{height: 50, width: 50,  borderRadius: '50%'}} src={currency.image} alt={currency.name} />
                {currency.name}
            
                </Link>
                <input type="checkbox" name="box1" class="cBox" /> 
               
            </div>
           
            
        ));
    }

    const loading = () => <h1>Loading ...</h1>;

    // form helper functions

   

    
    return (
       
          
 props.currencies ? loaded() : loading() 
        
    );
}


export default Home;