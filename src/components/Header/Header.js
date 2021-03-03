import './Header.css';
import { Link } from 'react-router-dom' ;




function Header() {

  function toggleBurgerMenu() {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
    document.querySelector('.navbar-burger').classList.toggle('is-active');
  }
  return (
    <div className="App">
      <nav className="navbar mainnav" role="navigation" aria-label="main navigation">
          <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item" href="/">
                Cristen Hewett
                </a> 
              
                <a id="navbarBurger" role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" onClick={toggleBurgerMenu} datat-target="navMenuIndex">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
              </div>
              
            
              <div id="navbarBasicExample" className="navbar-menu" >
          <div className="navbar-end">
          <Link to="/" className="navbar-item has-background-grey-darker" >
              Home
            </Link>
            <Link to="/about" className="navbar-item has-background-grey-darker" >
              About
            </Link>
            <Link to="/resume" className="navbar-item has-background-grey-darker" >
              Resume
            </Link>
            <Link to="/contact" className="navbar-item has-background-grey-darker" >
              Contact
            </Link>

          </div>
        </div>
          
          </div>
      </nav>

    </div>
  );
}

export default Header;
