import './Contact.css';
import Hewett from "../../assets/hewett-hs.png";

function Contact() {
return (
    <div className="App main">
        <div className="resume">
            <div className="site-banner-header">
                <h1 className="resume">
                Contact
                </h1>
            </div>
            <div className="container is-max-desktop mb-6">
            
            <div className="columns">
                
               <div className="contact-container">
                      
                        <div>
                        <img src={Hewett} className="clip-circle" alt="Cristen Hewett" />
                               
                              <p className="has-text-center contact">
                                <h4>Cristen Hewett</h4>
                                512-633-8105<br/>
                                <a href="mailto:cristenrh0@gmail.com">cristenrh0@gmail.com</a> 
                                </p>
                        </div>




                    </div>




            </div>



            </div>
        </div>
    </div>
        
    );
  }
  
  export default Contact;
  