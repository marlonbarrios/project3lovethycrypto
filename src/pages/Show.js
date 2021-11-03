import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { StyledMain } from '../styles';
import { Link } from 'react-router-dom';

const Show = (props) => {

    <Helmet>
    <title>See Details | React CRM ⚛️</title>
    <meta name="description" content="See details for the following contact" />
    <meta name="keywords" content="CRM, Client Relationship Management, Business, Tools" />
</Helmet>

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
           
            <StyledMain>
               
                <section>

                    <h1>{props.currency.name}/{props.currency.symbol}</h1>
                 
                    <p><img alt={props.currency.name} src={props.currency.image}></img></p>
                    <h3>Price in UDS: {props.currency.current_price}</h3>
                    <h3>Market Cap: {props.currency.market_cap_rank}</h3>
                    <h3>Price Change in last 24 hours:  {props.currency.price_change_24h}</h3>
                    <h3>All Time Hight:  {props.currency.ath}</h3>
                    <h3>Data last Updated: {props.currency.last_updated}</h3>
                    <h3><Link target="_bank" to={{ pathname:` https://www.youtube.com/results?search_query=what+is+${props.currency.name}`}}>
            YouTube videos about {props.currency.name}</Link></h3>
                    <h3><Link target="_bank" to={{ pathname:`http://www.google.com/search?q=${props.currency.name}+news+link`}}>
            News about {props.currency.name}</Link></h3>
           
                    {props.currency.notes.length ?
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