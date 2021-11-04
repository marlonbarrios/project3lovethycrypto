import styled from 'styled-components';

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 1rem;
    height: 6rem;
    background-color: #ba324f;
    color: #ffffff;
    box-shadow: 1px 1px 5px 2px #808080;
    
    nav {
        margin-left: 10rem;
            margin-right: 10rem;
        display: flex;
        align-items: center;
        ul {
            display: flex;
            list-style: none;
            align-items: center;
            li {
                margin-right: 1.5rem;
                font-size: 1.5rem;
                font-weight: 600;
                img {
                    height: 50px;
                    border-radius: 50%;
                }
                a {
                    text-decoration: none;
                    color: inherit;
                }
                &:last-child:hover {
                    cursor: pointer;
                }
            }
        }
    }
  
    
`;



export const StyledMain = styled.main`
    flex-grow: 1;
    display: flex;  
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
    button {
        width: 200px;
        height: 50px;
        font-size: 20px;
    }
  
`;


export const StyledFooter = styled.footer`
    display: flex;
    background-color: white;
    align-items: center;
    height: 5rem;
    justify-content: center;
   
`;




export const StyledSection = styled.section`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column-reverse;
    min-width: 100%;
    flex-grow: 1;

    @media(min-width: 975px) {
        margin-top: 1rem;
        flex-direction: row;
        min-width: 70vw;
        padding: 0;
    }
`;



export const StyledDiv = styled.div`
   max-width: 500px;
background-color: white;
border-radius: 20px;

    h3 {
            margin-left: 2rem;
            margin-right: 2rem;
        }
    text-align: center;
    @media(min-width: 975px) {
    
        min-width: 70vw;
      
    }
`;




export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    label {
        display: flex;
        margin: .5rem 0;
        justify-content: space-between;
        align-items: center;    
    }
    input {
        margin-left: 1rem;
        width: 50%;
        height: 2rem;
        border-radius: 5px;
    }
    input[type="submit"] {
        width: 100%;
        margin: 1rem 0;
    }
   
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;

background: rgba(255,255, 255, 1.00);
border-radius: 15px;
  width: 100%;
  button {
        width: 65px;
        height: 20px;
        font-size: 12px;
    }
  th, td {
        text-align: center;
        padding: 1px;
   padding-right: 15px;
   padding-left: 15px;
       padding-top: 15px;
  }

  @media(min-width: 975px) {
        width: 60%;
        height: 50%;
    }
`;