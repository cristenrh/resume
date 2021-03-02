
// get our fontawesome imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons' ;
import { faLinkedin} from '@fortawesome/free-brands-svg-icons' ;

import './Footer.css';



function Footer() {
    return (
      <div className="App">
     <footer className="footer is-primary">  
        <div className="container">
            <div className="columns is-mobile">
            <div className="column has-text-left is-half">    
                <p>Cristen Hewett</p>
            </div>
            <div className="column has-text-right is-half">    
                <a href="//www.facebook.com/cristen.hewett" className="icon"><i ><FontAwesomeIcon icon={faFacebookF} /></i></a>
                <a href = "https://www.linkedin.com/in/cristenhewett/" className="icon"><i ><FontAwesomeIcon icon={faLinkedin} /></i></a>

                
            </div>
            </div>
        </div>
</footer>

      </div>
    );
  }
  
  export default Footer;
  