
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav/Nav';

function App() {
  return (

    <div className="App">
      <Nav></Nav>
    <BrowserRouter>
    <Switch>
      <Route path="/home">
      <Home></Home>
      </Route>
      <Route path="/about">
      <About></About>
      </Route>
      <Route path="/services">
      <Services></Services>
      </Route>
      <Route path="/contact">
      <Contact></Contact>
      </Route>
      <Route exact path="/">
      <Home></Home>
      </Route>
      <Route>
      <NotFound></NotFound>
      </Route>
    </Switch>
    </BrowserRouter>
     </div>
  );
};

export default App;
