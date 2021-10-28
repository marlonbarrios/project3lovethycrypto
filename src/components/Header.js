import { Link } from 'react-router-dom';
import { logOut } from '../services/firebase';
import { StyledHeader } from '../styles.js';

const Header = (props) => {

    return (
        <StyledHeader>
            <h1>React CRM</h1>
            <nav>
                <ul>
                    {
                        props.user ?
                        <>
                            <li>Welcome, {props.user.displayName}</li>
                            <li>
                                <img 
                                    src={props.user.photoURL} 
                                    alt={props.user.displayName} 
                                />
                            </li>
                            <li onClick={logOut}>Logout</li>
                            <li>
                                <Link to="/dashboard">Dashboard</Link>
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