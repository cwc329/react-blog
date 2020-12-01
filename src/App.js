import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar'
import Posts from './pages/Posts';

function Home() {
  return (
    <h1>
      Home
    </h1>
  )
}

function About() {
  return (
    <h1>
      About
    </h1>
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <About />
        </Route>
        <Route exact path="/post">
          <Posts />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
