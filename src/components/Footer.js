import { StyledFooter } from '../styles';

const Footer = (props) => {
    return (
        <StyledFooter>
            <p>Copyright &copy; All Rights Reserved lovethycrypto {new Date().getFullYear()}</p>
        </StyledFooter>
    );
};

export default Footer;