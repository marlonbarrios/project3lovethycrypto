import { useState } from 'react';
import { StyledForm, StyledMain, StyledSection, StyledTable } from '../styles';

const Dashboard = (props) => {
    const [ formState, setFormState ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
    });

    // form helper functions

    const handleChange = event => {
        setFormState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    const handleSubmit = event => {
        event.preventDefault();
        // TODO: adds user's uid to form
        props.createContact(formState);
        setFormState({
            firstName: "",
            lastName: "",
            email: "",
            companyName: "",
        }); // clear form after its been submitted
    }

    return (
        <StyledMain>
            <h1>Your Contacts</h1>
            <StyledSection>
                <StyledForm onSubmit={handleSubmit}>
                    <label>First Name
                        <input 
                            onChange={handleChange} 
                            value={formState.firstName} 
                            name="firstName" 
                            type="text" 
                        />
                    </label>
                    <label>Last Name
                        <input 
                            onChange={handleChange} 
                            value={formState.lastName} 
                            name="lastName" 
                            type="text" 
                        />
                    </label>
                    <label>Email
                        <input 
                            onChange={handleChange} 
                            value={formState.email} 
                            name="email" 
                            type="email" 
                        />
                    </label>
                    <label>Company Name
                    <input 
                        onChange={handleChange} 
                        value={formState.companyName} 
                        name="companyName" 
                        type="text" 
                    />
                    </label>
                    <input type="submit" value="Add Contact" />
                </StyledForm>
                <StyledTable>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Company Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.contacts.map(c => (
                                <tr key={c._id}>
                                    <td>{c.firstName}</td>
                                    <td>{c.lastName}</td>
                                    <td>{c.email}</td>
                                    <td>{c.companyName}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </StyledTable>
            </StyledSection>
        </StyledMain>
    );
};

export default Dashboard;