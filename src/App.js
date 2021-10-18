import logo from './logo.svg';
import './App.css';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Shared/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import Login from './pages/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route  path="/home">
              <Home></Home>
            </Route>
            <Route path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </Route>
            <Route to="/login">
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
