import "./App.css";
import Form from "./components/Form";
import Results from "./components/Results";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Form}></Route>
          <Route path="/results/" exact component={Results}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
