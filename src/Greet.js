import React from 'react';
import { isNumber } from 'util';

// function used to swap letter correctly in transl33t function
let leetDictionary = {
    A: 4,
    E: 3,
    G: 6,
    I: 1,
    O: 0,
    S: 5,
    T: 7,
    }


function transl33t(originalString) {
    let result = '';
    // console.log(originalString);
    for (let i = 0; i < originalString.whom.length; i++) {
        let theLetter = originalString.whom[i]
        if (isNumber(theLetter) === true) {
            let theKey = 'A' //getKeyByValue(leetDictionary, theLetter)
            result += 'A'
        } else if (leetDictionary[theLetter] !== undefined) {
            result += leetDictionary[theLetter]
        } else if (leetDictionary[theLetter] === undefined) {
            result += theLetter
        }
        console.log(theLetter)
    }
    return result;
}

function cipher(originalName) {
    let result = '';
    let offset = 13;
    for (let i = 0; i < originalName.whom.length; i++) {
        let theLetter = originalName.whom[i];
        let ascii = originalName.whom.charCodeAt(i);
        if ((ascii) >=65 && (ascii) <= 90) {
            theLetter = String.fromCharCode(((ascii - 65 + offset) % 26) + 65);  
        } else if ((ascii) >=97 && (ascii) <= 122) {
            theLetter = String.fromCharCode(((ascii - 97 + offset) % 26) + 97);    
        }
        result += theLetter;
    }
    return result;
}



class Greet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            whom: props.whom || 'You'
        };
    }


    render() {
        return (    
            <div>
                <h1>
                    Hello {(this.props.whom)}
                </h1>
                <h2>
                    Press the button and your name will change {this.state.whom}
                </h2>
                <button
                    onClick={this._leetSpeak}
                >L33T</button>
                <button 
                    onClick={this._cyphered}
                >Cipher</button>
                <button 
                    onClick={this._lowerCase}
                >Lower Case</button>
                <button 
                    onClick={this._upperCase}
                >Upper Case</button>
            </div>
        )
    }


    _lowerCase = () => {
        this.setState({
            whom: (this.state.whom).toLowerCase()
        });
    }

    _upperCase = () => {
        this.setState({
            whom: (this.state.whom).toUpperCase()
        });
    }

    _leetSpeak = () => {
        this.setState({
            whom: transl33t(this.state)
        });
    }

    _cyphered = () => {
        this.setState({
            whom: cipher(this.state)
        });
    }

}


export default Greet;