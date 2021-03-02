import { faQq } from '@fortawesome/free-brands-svg-icons';
import './Home.css';
import axios from 'axios';
import List from '../List/List';
import withListLoading from '../../components/withListLoading';
import { Component } from 'react';
import React, { useEffect, useState } from 'react';





function Home() {


return (

        <div className="App">
            <div className="resume">
             
                    <section  className="hero">
                        <div  className="hero-body">
                            <div  className="container">
   
                            </div>

                           <div  className="site-banner-header">
                                   <h1  className="resume">
                                        Home
                                    </h1> 
                                
                                </div>
                                <div class="wrapper">
                                <div class="typing-demo">
                                    Welcome to Hewett Central
                                    </div>
                                </div>
                        </div>
                    </section>
                
            </div>
        </div>
       
       
       
       
       );
      }
 
      

      
      export default Home;