import React, { Component } from 'react';
import  './App.css'
import Subscribe from './Contain/Subscribe';
import Header from './Contain/Header';
import Service from './Contain/Service';
import Navigation from './Contain/Navigation';
import Project from './Contain/Project';
import Contact from './Contain/Contact';

class App extends Component{
    render(){
        return(
           <div>
               <Navigation/>
                <Header/>
                <Service/>
            <Project/>
  
<Contact/> 
    <footer>
        <div class="footer-text">
          
        </div>
        <div class="footer-text">
            <Subscribe/>
        </div>
        <div class="footer-icons">
            <a href="#"><i class="fa fa-facebook fa-2x"></i></a>
            <a href="#"><i class="fa fa-twitter fa-2x"></i></a>
            <a href="#"><i class="fa fa-instagram fa-2x"></i></a>
            <a href="#"><i class="fa fa-google-plus fa-2x"></i></a>   
        </div>
    </footer>
           </div>
        );
    }
}

export default App;
