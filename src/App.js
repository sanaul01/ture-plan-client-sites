import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import PlaceOrder from './Pages/Home/PlaceOrder/PlaceOrder';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path ="/">
            <Home></Home>
          </Route>
          <Route path ="/home">
            <Home></Home>
          </Route>
          <Route path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
