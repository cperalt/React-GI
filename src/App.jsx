import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const colors = [
    'red',
    'blue',
    'green',
  ]

  return (
    <>
      <h1>Welcome to my first react page</h1>
      <h2>Below are some counters to test state:</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>
        <button>
          count is {count}
        </button>
        <br />
        <button onClick={() => setCount((count) => 0)}>
          Reset
        </button>
      </div>
      <h2>An array of colors each mapped to a button</h2>
      <div>
        { colors.map( color => (
        <button style={{ backgroundColor: color, margin: 20}}>{`${color}`}</button>
        ) ) }
      </div>
    </>
  )

}

export default App
