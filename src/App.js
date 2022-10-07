import Siderbar from "./components/siderbar/Siderbar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
function App() {
  return (
    <div className="App">
      <Topbar />

      <div className="container">
        <Siderbar />
        <div className="other">other pages</div>
      </div>
    </div>
  );
}

export default App;
