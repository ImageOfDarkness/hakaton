import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import Registration from "./Pages/Registration/Registration";
function App() {
  return (
    <div className="App">
      {/*<Home></Home>*/}
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/Home' component={Home}/>
          <Route exact path='/LoginForm' component={LoginForm}/>
          <Route exact path='/Registration' component={Registration}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
