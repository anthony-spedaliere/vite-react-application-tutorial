import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
  // state 
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setUsers(data);        
      } catch (error) {
        console.log(error);
      }      
    };
    fetchUsers();
  }, [])

  console.log(users);

  return (
    <div>
      <h1>GitHub Users</h1>
      {
        users.map((user) => {
          const { id, avatar_url, login, html_url } = user;
          return (
          <ul key={id} className='users'>
            <img src={avatar_url} alt='github image unavailable'/>
            <h1>{login}</h1>
            <a href={html_url}>Profile</a>
          </ul>
          )
        })
      }
    </div>
  )



};
export default FetchData;
