import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import About from "./About"

function App() {
  return (
    <div className="App">
      <Router>
          <h1>This is Home page</h1>
          <Link to="/about">About</Link>
      <Switch>
        <Route path="/about" component={About}/>
      </Switch>
      </Router>
    </div>
    
  );
}

export default App;
