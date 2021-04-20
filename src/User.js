import React from 'react';
class User extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user: {
            name: "Omri",
            id: 1234
        }
      };
    }
  
    render() {
        const { user } = this.state;
      return (
        <div>
        <p>User: {user.name}</p>
          <p>Id: {user.id}</p>
          <button onClick={() => this.setState({ user: { id: user.id + 1 }})}>
            Click me
          </button>
        </div>
      );
    }
  }

  export default User;