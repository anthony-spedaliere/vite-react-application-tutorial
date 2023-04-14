const ErrorExample = () => {

  let count = 0;

  const handleIncrease = () => {
    count += 1;
    console.log(count);
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrease} className='btn'>increase</button>
    </div>

  );

};

export default ErrorExample;
