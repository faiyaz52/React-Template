import React, { Component } from 'react'
import Back from '../images/asphalt.png'
import Profile from '../images/Layer19.png'
export default class Contact extends Component {

    render() {
        return (
            <div>
                <section id="" >
                    <h1>INSPIRATIONAL TESTIMONY</h1>
                   
                    <img src={Back} width="100%"  />
                    <img src={Profile} style={{marginTop:"-1010px" ,marginLeft:"180px"}}/>
                    <img src={Profile} style={{marginTop:"-1010px",marginLeft:"190px"}}/>
                    <img src={Profile} style={{marginTop:"-1010px",marginLeft:"220px"}}/>
                </section>
            </div>
        )
    }
}
