
import { Helmet } from 'react-helmet';
import { StyledMain } from '../styles';
import { signIn } from '../services/firebase';

const Login = (props) => {
    return (
        <>
            <Helmet>
                <title>Login ⚛️</title>
                <meta name="description" content="Welcome to React CRM, please login to begin" />
                <meta name="keywords" content="login page, authenticate, login to begin" />
            </Helmet>
            <StyledMain>
                <button onClick={signIn}>Login with Google</button>
            </StyledMain>
        </>
    );
};

export default Login;