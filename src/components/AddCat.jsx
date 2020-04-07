import React, { Component } from "react";
import { connect } from "react-redux";
import { addCat } from "../redux/actions"

class AddCat extends Component {
    constructor(props) {
        super(props);
        this.state = { input: "" };
    }

    updateInput = input => {
        this.setState({ input });
    };

    handleAddCat = () => {
        this.props.addCat(this.state.input)

        this.setState({ input: '' })
    }
    render() {
        return (
            <div>
                <input
                    onChange={e => this.updateInput(e.target.value)}
                    value={this.state.input}
                />
                <button className="add-cat" onClick={this.handleAddCat}>
                    Add Cat
                  </button>
            </div>
        )
    }
};

}

export default connect(
    null, // mapStateToProps
    { addCat } // mapDispatchToProps)
)(AddCat);