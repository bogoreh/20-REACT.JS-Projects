import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <div className="counter-container">
      <h1 className="counter-title">Simple Counter</h1>
      
      <div className="counter-display">
        <span className="counter-value">{count}</span>
      </div>
      
      <div className="counter-buttons">
        <button 
          className="btn btn-decrement" 
          onClick={decrement}
        >
          -
        </button>
        
        <button 
          className="btn btn-reset" 
          onClick={reset}
        >
          Reset
        </button>
        
        <button 
          className="btn btn-increment" 
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Counter