import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { StyledMain } from '../styles';

const Show = (props) => {
    const [formState, setFormState ] = useState({
        content: ""
    });

    const handleChange = event => (
        setFormState({ content: event.target.value })
    );

    const handleSubmit = event => {
        event.preventDefault();
        props.createNote(formState, props.currency._id);
        setFormState({ content: '' }); // reset our form
    };

    return (
        <>
            <Helmet>
                <title>See Details | React CRM ⚛️</title>
                <meta name="description" content="See details for the following contact" />
                <meta name="keywords" content="CRM, Client Relationship Management, Business, Tools" />
            </Helmet>
            <StyledMain>
                <h1>Show</h1>
                <section>
                    <h3>{props.currency.name} {props.currency.symbol}</h3>
                 
                    <p><img width="50px" src={props.currency.image}></img></p>
                    <h3>{props.currency.current_price}</h3>

                   
                   
                    <p style={{fontWeight: 700}}>{props.currency.faved ? 'FAV' : 'Not fav'}</p>
                    {
                        props.currency.notes.length ?
                        <>
                            <br />
                                {props.currency.notes.map(n => 
                                    <p style={{margin: '1rem 0'}} key={n._id}>{n.content}</p>
                                )}
                              
                            <br />
                        </>
                        :
                        <p>No notes to display at this time</p>
                    }
                    <form onSubmit={handleSubmit}>
                        <textarea 
                            name="content"
                            onChange={handleChange}
                            value={formState.content}
                        ></textarea>
                        <input type="submit" value="Add Note" />
                    </form>
                </section>
            </StyledMain>
        </>
    );
};

export default Show;