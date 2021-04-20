import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            name: this.props.name,
        };
    }

    render() {
        return <h1>Hello, {this.state.name}</h1>;
    }
}

export default Header;