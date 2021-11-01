import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AddServices from './Pages/Home/AddServices/AddServices';
import AddUsers from './Pages/Home/AddUsers/AddUsers';
import Booking from './Pages/Home/Booking/Booking';
import Footer from './Pages/Home/Footer/Footer';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Home/Login/Login';
import ManageServices from './Pages/Home/ManageServices/ManageServices';
import MyOrders from './Pages/Home/MyOrders/MyOrders';
import MyService from './Pages/Home/MyService/MyService';
import NotFound from './Pages/Home/NotFound/NotFound';
import PlaceOrder from './Pages/Home/PlaceOrder/PlaceOrder';
import PrivateRoute from './Pages/Home/PrivateRoute/PrivateRoute';
import UpdateService from './Pages/Home/UpdateService/UpdateService';


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
          <PrivateRoute path="/booking/:serviceId">
            <Booking></Booking>
          </PrivateRoute>
          <PrivateRoute path ="/addservices">
            <AddServices></AddServices>
          </PrivateRoute>
          <PrivateRoute path="/manageservices">
            <ManageServices></ManageServices>
          </PrivateRoute>
          <PrivateRoute path="/addusers">
            <AddUsers></AddUsers>
          </PrivateRoute>
          <PrivateRoute path="/myservice">
            <MyService></MyService>
          </PrivateRoute>
          <Route path="/updateservice/:serviceId">
            <UpdateService></UpdateService>
          </Route>
          <PrivateRoute path="/myorder">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
