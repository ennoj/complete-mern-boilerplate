import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <h1>Laskuri {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <br />
      <button onClick={() => dispatch(decrement(2))}>-</button>
      <br />
      <button onClick={() => dispatch(login())}>Kirjaudu sisään/ulos</button>

      {isLogged ? (
        <h3>Piilotettu lause, joka näkyy vain kirjautuneille käyttäjille.</h3>
      ) : null}
    </div>
  );
}

export default App;
