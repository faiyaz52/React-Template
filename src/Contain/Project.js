import React, { Component } from 'react'
import Digital from '../images/thumbnail.png'
class Project extends Component {
    render() {
        return (
            <div>
                <section id="projects">
                    <div class="title">
                        <div>
                            <h1>RECENT BLOG</h1>
                            <p>Our Blog</p>
                        </div>
                        <div class="title-underline"></div>
                    </div>
                    <div class="projects-container">
                    
                        <article class="projects-item">
                            <img src={Digital} />
                            <div class="img-text">
                                <h1>Press Release</h1>
                                <h6>Indegene Acquires DT Associates,Provide End-To-End Enterprise for customer Excellence -from consulting to operatios</h6>
                            </div>
                            <div class="img-footer">
                               
                                <div class="footer-date">18 January 2019</div>
                            </div>
                        </article>

                        <article class="projects-item">
                        <img src={Digital} />
                            <div class="img-text">
                                <h1>Webinars</h1>
                                <h6>Health workplace conferance and Award 2019, Indegene enter "Platinum League of Health Workplace"</h6>
                            </div>
                            <div class="img-footer">
                                
                                <div class="footer-date"> 18 January 2019</div>
                            </div>
                        </article>

                        <article class="projects-item">
                            <img src={Digital} />
                            <div class="img-text">
                                <h1>Press Release</h1>
                                <h6>Exemplary PV solution to augment efficiency in small and medium size pharma companies Acquires DT Associates,Provide End-To-End</h6>
                            </div>
                            <div class="img-footer">
                          
                                <div class="footer-date">18 January 2019</div>
                            </div>
                        </article>
                    </div>
                </section> 
             </div>
        )
    }
}
export default Project;