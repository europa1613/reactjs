import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
      </div>
      <footer className="footer">
        <p>Copyright &copy; 2024</p>
      </footer>
    </div>
  );
}

export default App;
