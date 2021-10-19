import './App.css';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Shared/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Login/Register/Register';
import Blog from './pages/Blog/Blog';
import Details from './pages/Details/Details';
import Prices from './pages/Prices/Prices';
import FAQ from './pages/ContactUs/ConstactUs';
import ContactUs from './pages/ContactUs/ConstactUs';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/details/:id">
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute path="/contact">
              <ContactUs></ContactUs>
            </PrivateRoute>
            <PrivateRoute path="/pricing">
              <Prices></Prices>
            </PrivateRoute>
            <Route path="*" >
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
