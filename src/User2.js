import React, {useState} from 'react';
const User = props => {
  const [name, setName] = useState('Omri');
  const [id, setId] = useState(1234);

  const onBtnClick = () => {
    setId(id + 1)
  }

      return (
        <div>
        <p>User: {name}</p>
          <p>Id: {id}</p>
          <button onClick={onBtnClick}>
            Click me
          </button>
        </div>
      );
    }

  export default User;