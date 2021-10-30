import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tours from './components/Tours/Tours';
import NotFound from './components/NotFound/NotFound';
import MyOrder from './components/MyOrder/MyOrder';
import SignIn from './components/SignIn/SignIn';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/tours">
            <Tours></Tours>
          </Route>
          <Route path="/myorder">
            <MyOrder></MyOrder>
          </Route>
          <Route path="/allorder">
            <Tours></Tours>
          </Route>
          <Route path="/addservice">
            <Tours></Tours>
          </Route>
          <Route path="/signIn">
            <SignIn></SignIn>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
