import { Link } from 'react-router-dom';
import { logOut } from '../services/firebase';
import { StyledHeader } from '../styles.js';




const Header = (props) => {

    return (
        <StyledHeader>
           
            <nav>
                <ul>
                    <li> <h1><Link to="/">lovethycrypto</Link></h1></li>
                    {props.user ?
                        <>
                            <li>
                            <img 
                                    src={props.user.photoURL} 
                                    alt={props.user.displayName} 
                                />  
                            </li>
                            <li>{props.user.displayName}</li>
                            
                            <li onClick={logOut}>Logout</li>
                            <li>
                                <Link to="/dashboard">Your List</Link>
                            </li>
                        </>
                        :<li>
                            <Link to="/login">Login</Link>
                        </li>
                    }
                </ul>
            </nav>
        </StyledHeader>
    );
};

export default Header;