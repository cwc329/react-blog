import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar'
import PostsRouter from './pages/Posts';

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
        <Route path="/login">
          <About />
        </Route>
        <Route path="/posts">
          <PostsRouter />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
