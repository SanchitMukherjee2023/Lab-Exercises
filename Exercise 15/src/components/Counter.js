import React, { useState, useReducer } from 'react';

// useState version
const CounterWithState = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>useState Counter</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Increase</button>
      <button onClick={() => setCount(c => c - 1)}>Decrease</button>
    </div>
  );
};

// useReducer version
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h3>useReducer Counter</h3>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrease</button>
    </div>
  );
};

export { CounterWithState, CounterWithReducer };