import { useState } from 'react';

const UserChallenge = () => {

  const [user, setUser] = useState(null);

  function login() {
    setUser('Frank');
  }

  function logout() {
    setUser(null);
  }

  return (
    <div>
      {user ? <h4>Hello there, {user}</h4> : <h4>Please login</h4>}
      <button className="btn" onClick={user ? logout : login}>{user ? 'Logout' : 'Login'}</button>
    </div>
  )
};

export default UserChallenge;
