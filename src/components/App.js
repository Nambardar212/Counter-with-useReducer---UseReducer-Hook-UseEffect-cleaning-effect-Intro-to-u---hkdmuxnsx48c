import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const initalState = {count: 0}

const App = () => {
const [state,dispatch] = useReducer(counterReducer, initalState)



const handleIncrease = (e) => {
    dispatch({
      type : e.target.innerText
    })
}

const handleDecrease = (e) => {
  dispatch({
    type : e.target.innerText
  })
}

  return (
    <div id="main">
          <span id='counter'>{state.count}</span><br/>
          <button id='increment-btn' onClick={(e) => handleIncrease(e)}>increase</button>
          <button id='decrement-btn' onClick={(e) => handleDecrease(e)}>decrease</button>
    </div>
  )
}


export default App;
