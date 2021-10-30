import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AddServices from './Pages/Home/AddServices/AddServices';
import AddUsers from './Pages/Home/AddUsers/AddUsers';
import Booking from './Pages/Home/Booking/Booking';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Home/Login/Login';
import ManageServices from './Pages/Home/ManageServices/ManageServices';
import MyService from './Pages/Home/MyService/MyService';
import PlaceOrder from './Pages/Home/PlaceOrder/PlaceOrder';
import PrivateRoute from './Pages/Home/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path ="/">
            <Home></Home>
          </Route>
          <Route path ="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/booking/:serviceId">
            <Booking></Booking>
          </Route>
          <Route path ="/addservices">
            <AddServices></AddServices>
          </Route>
          <Route path="/manageservices">
            <ManageServices></ManageServices>
          </Route>
          <Route path="/addusers">
            <AddUsers></AddUsers>
          </Route>
          <Route path="/myservice">
            <MyService></MyService>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
