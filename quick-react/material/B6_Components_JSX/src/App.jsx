import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const showButton = true // Hard-coded variable to control button visibility
  
  const buttonElement = showButton && (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  )

  return (
    <>
      <h1>Quick React</h1>
      <article className="card">
        {buttonElement}
      </article>
    </>
  )
}

export default App