import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar'
import Posts from './pages/Posts';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="addPost">

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
