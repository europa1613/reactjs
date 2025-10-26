import logo from "./logo.svg";
import "./App.css";
import TransactionViewer from "./components/TransactionViewer";
import TransactionViewerV2 from "./components/TransactionViewerSVG";

function App() {
  return (
    <div className="App">
      <TransactionViewer />
      <hr style={{ padding: "20px" }} />
      <TransactionViewerV2 />
    </div>
  );
}

export default App;
