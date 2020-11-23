const SecondCounter = ({ counter2, onIncrement2, onDecrement2 }) => {
  return (
    <>
      <h2>Counter = {counter2}</h2>
      <button onClick={onIncrement2}>+</button>
      <button onClick={onDecrement2}>-</button>
    </>
  );
};

export default SecondCounter;
