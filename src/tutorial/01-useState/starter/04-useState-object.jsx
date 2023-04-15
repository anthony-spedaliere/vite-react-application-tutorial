import { useState } from 'react';

const UseStateObject = () => {

  // data
  const people = [
    {
      id: 1,
      name: 'John',
      age: 28,
      hobby: 'Reads books.'
    },
    {
      id: 2,
      name: 'Sarah',
      age: 24,
      hobby: 'Skydiving'
    },
    {
      id: 3,
      name: 'Jill',
      age: 41,
      hobby: 'Boating'
    },
  ];

  // state values
  // const [name, setName] = useState(people[0].name);
  // const [age, setAge] = useState(people[0].age);
  // const [hobby, setHobby] = useState(people[0].hobby);
  const[person, setPerson] = useState({
    id: people[0].id,
    name: people[0].name,
    age: people[0].age,
    hobby: people[0].hobby,
  })

  // methods
  const displayPerson = () => {
    setPerson({...person, name:"Susan"});
  }


  return (
    <div>
      <h1>Name: {person.name}</h1>
      <h2>Age: {person.age}</h2>
      <h3>Hobby: {person.hobby}</h3>
      <button onClick={displayPerson} type="button" className='btn'>Show {person.name}</button>
    </div>
  );
};

export default UseStateObject;
