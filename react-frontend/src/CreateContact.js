import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ImageInput from "./ImageInput";
import serializeForm from 'form-serialize';


class CreateContact extends Component {

    state = {
        name: '',
        handle: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, {hash: true}); // hash turns it into an object

        if (this.props.onCreateContact){
            this.props.onCreateContact(values);
        }
    };

    render() {
        return (
            <div>
                <Link to={'/'} className={'close-create-contact'}>Close</Link>
                <form onSubmit={this.handleSubmit} className={'create-contact-form'}>
                    <ImageInput className={'create-contact-avatar-input'}
                                maxHeight={64}
                                name={'avatarURL'}/>
                    <div className="create-contact-details">
                        <input type="text" name={'name'} placeholder={'Name'}/>
                        <input type="text" name={'handle'} placeholder={'Handle'}/>
                        <button type={'submit'}>Add Contact</button>
                    </div>
                </form>
            </div>
        );
    }

}

export default CreateContact;
