// неуправляемые компоненты

import React from "react";

export default class Form extends React.Component{
    handleSumbitClick = () => {
        const name = this._name.value;
    }
    render() {
        return(
            <div>
                <input type="text" ref={input => this._name = input}/>
                <button onClick={this.handleSumbitClick}>Sing up</button>
            </div>
        )
    } 
}



