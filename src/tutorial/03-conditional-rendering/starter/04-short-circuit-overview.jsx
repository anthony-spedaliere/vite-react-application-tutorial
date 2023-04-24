import { useState } from 'react';

const ShortCircuitOverview = () => {

  const [isFalsy, setIsFalsy] = useState(0);
  const [isTruthy, setIsTruthy] = useState("True");

  return (
    <div>
      <h1>|| operator</h1>
      <h2>isFalsy || isTruthy: {isFalsy || isTruthy} </h2>
      <h2>isTruthy || isFalsy: {isTruthy || isFalsy} </h2>
      <br/>
      <h1>&& operator</h1>
      <h2>isFalsy && isTruthy: {isFalsy && isTruthy} </h2>
      <h2>isTruthy && isFalsy: {isTruthy && isFalsy} </h2>
    </div>
  )
};
export default ShortCircuitOverview;
