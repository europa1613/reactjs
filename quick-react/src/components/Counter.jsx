import { useState, use } from "react";

// Cache promises by label (simulates 3rd party React libraries and frameworks)
const promiseCache = new Map();

// Simulate fetching initial counter data
// Caching the promise so it isn't re-created when the components are re-executed
function fetchCounterData(label) {
    if (!promiseCache.has(label)) {
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    initialCount: Math.floor(Math.random() * 5), // Random starting count
                    message: `${label} is ready!`,
                });
            }, 500 + Math.random() * 1500); // Random delay 1-3 seconds
        });
        promiseCache.set(label, promise);
    }

    return promiseCache.get(label);
}

function Counter({ label, children }) {
    // Use React 19's 'use' hook to handle the promise
    const data = use(fetchCounterData(label));
    const [count, setCount] = useState(data.initialCount);

    console.log("Executing Counter " + label);

    return (
        <article className="card">
            <h2>{label}</h2>
            <p>{data.message}</p>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            {children}
        </article>
    );
}

export default Counter;
// This component simulates a counter that fetches its initial data asynchronously.
// It uses React's new `use` hook to handle promises, allowing the component to suspend
// until the data is ready. The `fetchCounterData` function simulates an API call
// that returns a promise with the initial count and a message. The component also
// allows for incrementing the count when the button is clicked. The `children` prop
// allows for additional content to be passed into the component, which can be useful