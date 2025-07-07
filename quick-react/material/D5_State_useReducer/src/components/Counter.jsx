import { useState, useReducer } from 'react'

// Simple reducer to track the last action and total clicks
function historyReducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, lastAction: 'incremented', clickCount: state.clickCount + 1 };
        case 'RESET':
            return { ...state, lastAction: 'reset' }; // clickCount stays the same!
        default:
            return state;
    }
}

function Counter({ label, children }) {
    const [count, setCount] = useState(0);
    const [history, dispatch] = useReducer(historyReducer, { 
        lastAction: 'none', 
        clickCount: 0 
    });

    console.log("Executing Counter " + label);

    const handleIncrement = () => {
        setCount(count => count + 1);
        dispatch({ type: 'INCREMENT' });
    };

    const handleReset = () => {
        setCount(0);
        dispatch({ type: 'RESET' });
    };

    return (
        <article className="card">
            <h2>{label}</h2>
            <button onClick={handleIncrement}>
                count is {count}
            </button>
            &nbsp;&nbsp;
            <button onClick={handleReset}>Reset</button>
            <p>Last action: {history.lastAction}</p>
            <p>Total clicks: {history.clickCount}</p>
            {children}
        </article>
    )
}

export default Counter;