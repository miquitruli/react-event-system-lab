
import React from 'react';

export default class Keypad extends React.Component {
    passwordAction = () => {
        console.log("Entering password...");
    };
    
    
    render() {
        return (
            <input onKeyUp={this.passwordAction} type="password" />
        )
    };
}
