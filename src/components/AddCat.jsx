import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addCat } from '../redux/actions'


class AddCat extends Component {
    state = {
        petName: '',
        activity: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { petName, activity } = this.state;
        this.props.addCat({ name: petName, activity })
        this.setState({
            petName: '',
            activity: ''
        })
    }


    render() {
        const { petName, activity } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="petName" placeholder="Cat's Name" onChange={this.handleChange} value={petName} />
                is
                <input type="text" name="activity" placeholder="Activity" onChange={this.handleChange} value={activity} />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default connect(null, { addCat })(AddCat);