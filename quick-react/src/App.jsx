import Counter from "./components/Counter";
import "./App.css";

function App() {
    return (
        <>
            <h1>Quick React</h1>
            <Counter label="Counter 1" />
            <Counter label="Counter 2" >
                <p>This is a child element inside Counter 2</p>
            </Counter>
            <Counter label="Counter 3" />
        </>
    );
}

export default App;


