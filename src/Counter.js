import React from 'react';


class BouncingCounter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            number: 0
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                number: this.state.number + 1
            });
        }, 1000);
    }

    render() {
        return (
            <h1>
                {this.state.number}
            </h1>
        );
    }
}





export default BouncingCounter;