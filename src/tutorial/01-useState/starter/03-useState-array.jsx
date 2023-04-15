import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {

  const [people, setPeople] = useState(data);

  const filterPeople = (id) => {
    const filteredPeople = people.filter((person) => person.id !== id);
    setPeople(filteredPeople);
  }

  const clearAllPeople = () => {    
    setPeople([]);
  }

  return (
    <div>
      <ul>
        {people.map((person) => {          
          return(
          <div key={person.id}>
            <li>{person.name}</li>
            <button type='button' onClick={() => filterPeople(person.id)} className='btn'>Delete</button>
          </div>
          )
        })}
      </ul>
      <button style= {{marginTop: '2rem'}} type='button' onClick={() => clearAllPeople()} className='btn'>Clear All</button>
    </div>    
  )
};

export default UseStateArray;
