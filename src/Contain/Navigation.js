import React from 'react'
import './Navigation.css'
import logo from '../images/logo.png'
const Navigation = () =>{
 return (
     <div>
        <nav>
            <ul>
                <li><img src={logo}/></li>
                <li><a href="#">Home</a></li>
                <li><a href="#skills">About</a></li>
                <li><a href="#services">Product</a></li>
                <li><a href="">Events</a></li>
                <li><a href="#posts">Calender</a></li>
                <li><a href="#projects">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
     </div>    
 )
}

export default Navigation;