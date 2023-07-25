// Управляемые компоненты
import React from "react";

export default class NameForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        name: "",
    }
}

handleNameChange = (event) => {
    this.setState({ name: event.target.value });
};

    render() {
        return(
            <div>
                <input 
                type="text" 
                value={this.state.name} 
                onChange={this.handleNameChange} 
                />
            </div>
        ); 
    }
}



