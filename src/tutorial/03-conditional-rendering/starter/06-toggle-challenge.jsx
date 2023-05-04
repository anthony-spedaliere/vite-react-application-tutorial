import { useState } from 'react';

const ToggleChallenge = () => {
  
  const [isToggled, setIsToggled] = useState(false);

  function onClickHandler() {
    if(isToggled) {
      return setIsToggled(false);
    } else {
      return setIsToggled(true);
    }
  }
  
  return (
    <div>
      <button className='btn' onClick={onClickHandler}>Toggle</button>
      <h1>{isToggled ? 'Toggle is true' :  'Toggle is false'}</h1>
    </div>
  )
};

export default ToggleChallenge;
