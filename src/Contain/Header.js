import React from 'react'
// import  './App.css'
import Banner from '../images/bg_3.png'
const Header = () =>{
 return (
        <div>
            <header id="banner">
         
                <div class="banner-title">
                     <img  id="banner" src={Banner}/>
                
                       <div class="banner-underline"></div>
                    <div class="banner-btn">
                     <button type="button">Download</button>                     
                    </div>
                </div>
            </header>
        </div>  
 )
}

export default Header;