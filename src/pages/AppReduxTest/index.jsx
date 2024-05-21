import { useContext } from 'react';
import { AppContextWrapper } from '../../AppRedux';

export default function Test() {
  const { state, dispatch } = useContext(AppContextWrapper);

  const increment = () => {
    dispatch({ type: 'INCREMENT', payload: 1 });
  };
  const decrement = () => {
    dispatch({ type: 'DECREMENT', payload: 1 });
  };
  return (
    <div>
      <h1>Test</h1>
      <p> state : {state.name}</p>
      <p> age : {state.age}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
