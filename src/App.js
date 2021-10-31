import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tours from './components/Tours/Tours';
import NotFound from './components/NotFound/NotFound';
import SignIn from './components/SignIn/SignIn';
import Header from './components/Header/Header';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import BookTour from './components/BookTour/BookTour';
import AddTourPackage from './components/AddTourPackage/AddTourPackage';


function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <PrivateRoute path="/booktour/:orderId">
              <BookTour></BookTour>
            </PrivateRoute>
            <Route path="/allorder">
              <Tours></Tours>
            </Route>
            <Route path="/addtour">
              <AddTourPackage></AddTourPackage>
            </Route>
            <Route path="/signIn">
              <SignIn></SignIn>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
