import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.countTo = this.props.count;
        this.state = {
            count: 0
        };
    }
    
    componentDidMount() {
        var stopper = this.countTo;
        this.interval = setInterval(function() {
            if (this.state.count === stopper) {
                clearInterval(this.interval);
            } else {
                this.setState({
                   count: this.state.count + 1
                });
            }
        }.bind(this), 10);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        return <span>{this.state.count}</span>;
    }
}

export default Counter;