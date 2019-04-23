import React from 'react';

function lowerName(aName) {
    return aName.toLowerCase();
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
            <h1>
            Hello {lowerName(this.props.whom)}
            </h1>
        )
    }


    _lowerCase() {
        this.setState({
            whom: (this.state).toLowerCase()
        });
    }
}


export default Greet;