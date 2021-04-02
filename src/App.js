
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Scroll from './components/Scroll/Scroll';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { createBrowserHistory } from 'history';


function App() {
  const history = createBrowserHistory();

  return (
  <div basename={'/cristen'} className="App fullHeight" history={history} >
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Header/>
    
          <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`}  component={Home}>
            <Home />
          </Route>
          <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About} >
            <About />
          </Route>
          <Route exact path={`${process.env.PUBLIC_URL}/resume`} component={Resume} >
            <Resume />
          </Route>
          <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact} >
            <Contact />
          </Route>
        </Switch>
   
   
    <Footer />
    </div>
  );
}

export default App;

