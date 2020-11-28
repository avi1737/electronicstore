import { React } from 'react';
import Login from './auth/pages/Login';
import { BrowserRouter, BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import SignUp from './auth/pages/SignUp';
import Home from './Home';
import Admin from './Admin/components/Admin';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/Login' component = {Login} />
        <Route exact path = '/SignUp' component = {SignUp} />
        
        <Route path = '/Admin'>
          <Admin/>
        </Route>
        
      </Switch>  
    </div>
    </BrowserRouter>
  );
}

export default App;
