import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

function App() {
    return (
        <div>
            <NavBar />
            <main className="container">
                <Counters />
            </main>
        </div>
    );
}

export default App;
