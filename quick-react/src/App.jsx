import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    const handleClick = (event) => {
        console.log("**----------------------**");
        console.log("React SyntheticEvent:", event);
        console.log("Native event:", event.nativeEvent);
        console.log("Current target (button):", event.currentTarget);
        console.log("Event target:", event.target);
        console.log(
            "Native event current target (root):",
            event.nativeEvent.currentTarget
        );

        // Show that the native event is actually attached to the root
        const root = document.getElementById("root");
        console.log("Root element:", root);
        console.log(
            "Native event attached to root?",
            event.nativeEvent.currentTarget === root
        );

        setCount((count) => count + 1);
    };

    return (
        <>
            <h1>Quick React</h1>
            <article className="card">
                <button onClick={handleClick}>count is {count}</button>
            </article>
        </>
    );
}

export default App;
