import { useState } from 'react'

function Counter({ label, children }) {
    const [count, setCount] = useState(0);

    console.log("Executing Counter " + label);

    return (
        <article className="card">
            <h2>{label}</h2>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            { children }
        </article>
    )
}

export default Counter;