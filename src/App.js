import './App.css';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Shared/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import Login from './pages/Login/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Login/Register/Register';
import Blog from './pages/Blog/Blog';

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
            <PrivateRoute path="/blog">
              <Blog></Blog>
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
