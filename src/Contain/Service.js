import React from 'react'
import Customer from '../images/Layer11.png'
import DataAnalytics from '../images/Layer12.png'
import CoComm from '../images/Layer14.png'
import Digital from '../images/Layer13.png'
import Omni from '../images/Layer16.png'
const Service = () =>{
 return (
        <div>

    <section id="services">
     
        <div class="title">
            <div class="title-text">
                <h1>Company</h1>
            </div>
            <div class="title-underline"></div>
        </div>

        <div class="services-container">
            <article class="service-item service-item-white">
                <div class="front-text" >
                    <img src={DataAnalytics} style={{backgroundColor:"#d49183",borderRadius:"40px",width:"60px",height:"60px",marginBottom:"20px"}}/>
                    <h1>Data and Analytics</h1>
                </div>

                <div class="back-text">
                    <h1>Data and Analytics</h1>
                    <p>A must have tool for pharma marketers to again insights into the latest chennel preferences ,marketing budget allocations,technology utilization</p>
                </div>
            </article>

            <article class="service-item service-item-black">
                <div class="front-text">
                <img src={CoComm} style={{backgroundColor:"#d49183",borderRadius:"40px",width:"60px",height:"60px",marginBottom:"20px"}}/>
                    <h1>R/D Medical Transformation</h1>
                </div>

                <div class="back-text">
                    <h1>R/D Medical Transformation</h1>
                    <p>A must have tool for pharma marketers to again insights into the latest chennel preferences ,marketing budget allocations,technology utilization</p>
                </div>
            </article>
            <article class="service-item service-item-white">
                <div class="front-text">
                  <img src={Omni}  style={{backgroundColor:"#d49183",borderRadius:"40px",width:"60px",height:"60px",marginBottom:"20px"}}/>
                    <h1>Omnipresence CXM Plateform</h1>
                </div>
                <div class="back-text">
                    <h1>Omnipresence CXM Plateform</h1>
                    <p>A must have tool for pharma marketers to again insights into the latest chennel preferences ,marketing budget allocations,technology utilization</p>
                </div>
            </article>     
            <article class="service-item service-item-black">
                <div class="front-text">
                    <img src ={Digital} style={{backgroundColor:"#d49183",borderRadius:"40px",width:"60px",height:"60px",marginBottom:"20px"}}/>
                    <h1>Digital Transformation</h1>
                </div>

                <div class="back-text">
                <h1>Digital Transformation</h1>
                    <p>A must have tool for pharma marketers to again insights into the latest chennel preferences ,marketing budget allocations,technology utilization</p>
                </div>
            </article>
            <article class="service-item service-item-black">
                <div class="front-text">
                    <img src={Customer} style={{backgroundColor:"#d49183",borderRadius:"40px",width:"60px",height:"60px",marginBottom:"20px"}}/>
                    <h1>Customer Experience</h1>
                </div>

                <div class="back-text">
                    <h1>Customer Experience</h1>
                    <p>A must have tool for pharma marketers to again insights into the latest chennel preferences ,marketing budget allocations,technology utilization</p>
                </div>
            </article>     
            <article class="service-item service-item-white">
                <div class="front-text">
                   <img src={CoComm} style={{backgroundColor:"#d49183",borderRadius:"40px",width:"60px",height:"60px",marginBottom:"20px"}}/>
                    <h1>Co-commercialization</h1>
                </div>

                <div class="back-text">
                    <h1>Co-commercialization</h1>
                    <p>A must have tool for pharma marketers to again insights into the latest chennel preferences ,marketing budget allocations,technology utilization</p>
                </div>
            </article>
        </div>
    </section>
        </div>  
 )
}

export default Service;