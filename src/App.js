import {useSelector, useDispatch} from 'react-redux';
import './App.css';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const Increment = () => {
    dispatch({type: 'INCREMENT'});
  };
  const Decrement = () => {
    dispatch({type: 'DECREMENT'});
  }
  const Add = () => {
    dispatch({ type: 'ADD', payload:10});
  }
  return (
    <div className="App">
      <h1>Counter Application</h1>
      <p>{counter}</p>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Add}>Add By 10</button>
    </div>
  );
}
export default App;
