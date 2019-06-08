import React, {Component} from "react";
import {PropTypes} from "prop-types";
import {Link} from "react-router-dom";

class ListContacts extends Component {

    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState((currentState) => ({
            query: query.trim()
        }));
    }

    clearQuery = ()=> {
        this.setState((currentState) => ({
            query: ''
        }));
    }

    render() {
        const {query} = this.state;
        const {contacts, onDeleteContact} = this.props;

        const showingContacts = query === '' ? contacts : contacts.filter((c) => (
            c.name.toLowerCase().includes(query.toLowerCase())));
        return (
            <div className="list-contacts">

                {showingContacts.length !== contacts.length && (
                    <div className={'showing-contacts'}>
                        <span>{`Now showing ${showingContacts.length} of ${contacts.length}`}</span>
                        <button onClick={this.clearQuery}>Show All</button>
                    </div>
                )}
                <div className="list-contacts-top">
                    <input type="text" placeholder={'Search Contacts'}
                           value={query}
                           onChange={(event) => this.updateQuery(event.target.value)}
                           className={'search-contacts'}/>

                    <Link to="/create" className={'add-contact'}>Add Contact</Link>
                </div>
                <ol className={'contact-list'}>
                    {showingContacts.map((person) => (
                        <li key={person.id} className='contact-list-item'>
                            <div className={'contact-avatar'}
                                 style={{
                                     backgroundImage: `url(${person.avatarURL})`,
                                 }}>
                            </div>
                            <div className="contact-details">
                                <p>{person.name}</p>
                                <p>{person.handle}</p>
                            </div>
                            <button onClick={() => onDeleteContact(person)} className={'contact-remove'}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        );
    }

}


export default ListContacts;
