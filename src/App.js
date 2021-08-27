import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import UserProfile from './components/UserProfile';


function App() {
  return (

    <div className="App">
      <Router>
        <Switch>
          <Route path='/user/profile' exact component={UserProfile} />
          <Route path='/' exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
