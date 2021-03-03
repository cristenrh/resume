import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Scroll from './components/Scroll/Scroll';
import { Route } from 'react-router-dom';


function App() {


  return (
    <div className="App">

    <Header />
      <Scroll>
        <Route exact={ true } path = "/" component={Home} ></Route>
        <Route path = "/resume" component={Resume} ></Route>
        <Route path = "/about" component={About} ></Route>
        <Route path = "/contact" component={Contact} ></Route>
      </Scroll>
   
    <Footer />
    </div>
  );
}

export default App;
