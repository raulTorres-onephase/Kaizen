const Counter = ({ counter, onIncrement, onDecrement }) => {
  return (
    <>
      <h2>Counter = {counter}</h2>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </>
  );
};

export default Counter;
