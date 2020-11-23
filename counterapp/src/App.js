import { useState } from 'react';
import Counter from './Counter';
import SecondCounter from './SecondCounter';
import Total from './Total';

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const onIncrement = () => {
    setCounter(counter + 1);
  };

  const onDecrement = () => {
    setCounter(counter - 1);
  };
  const onIncrement2 = () => {
    setCounter2(counter2 + 1);
  };

  const onDecrement2 = () => {
    setCounter2(counter2 - 1);
  };
  return (
    <div className="App">
      <h1>Counter App</h1>
      <Counter
        counter={counter}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
      <SecondCounter
        counter2={counter2}
        onIncrement2={onIncrement2}
        onDecrement2={onDecrement2}
      />
      <Total counter={counter} counter2={counter2} />
    </div>
  );
}

export default App;
