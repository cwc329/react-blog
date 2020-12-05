import { useState, useEffect } from 'react';
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
import { getUserData } from './WebAPI';
import { UserContext } from './context';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    getUserData({ token })
      .then(data => {
        console.log(data);
        if (data.ok !== 1) {
          window.localStorage.setItem('token', '');
          setUser(null);
        } else {
          if (user && data.data.id === user.data.id) {
            return;
          }
          setUser(data);
        }
      })
  }, [user])

  return (
    <UserContext.Provider value={{user, setUser}}>
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
        {console.log(user)}
      </Router>
    </UserContext.Provider>
  );
}

export default App;
