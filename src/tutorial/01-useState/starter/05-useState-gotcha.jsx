import { useState } from "react";

const UseStateGotcha = () => {

  // state values
  const [value, setValue] = useState(0);

  // component methods
  const incrementValue = () => {
    setTimeout(() => {
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };

  //console.log(value);

  return (
    <div>
      <h2>Value: {value}</h2>
      <button type='button' className='btn' onClick={() => incrementValue()}>Increment</button>
    </div>
  )
};

export default UseStateGotcha;
