import React, { Component } from 'react';
import './styles/Head.scss'
import Fade from 'react-reveal/Fade'; // Importing Zoom effect
import { FaAngleDown } from 'react-icons/fa';
import { FiMenu, FiX ,FiUser} from 'react-icons/fi';
import {  NavLink, Link  } from 'react-router-dom'
import Links from './Links';
import AnchorLink from 'react-anchor-link-smooth-scroll'



export default class Head extends Component {
    constructor() {
        super();
        this.state = { toggle: false };
    }

   

    render() {
        return (<div>
{/* <NavLink to="/dashboard"><div>Test</div></NavLink> */}
           
           
            <div className='head'>
          
            <Links props={this.state.toggle} dark={false}/>

                <Fade>

                    {/* {this.state.toggle?<div>true</div>:<div>false</div>} */}
                </Fade>
                <div className="hero">
                    <h1>WELCOME</h1>
                    INDIA'S FIRST MULTI-DISCIPINARY UNDERGRADUATE RESEARCH LAB
                </div>
                <AnchorLink offset='50' href="#start" style={{color:'white',cursor:'pointer'}}>
                <div className="scroll">
                    Explore <br />
                    Next Tech Lab<br />
                      <FaAngleDown className='icon' size={20} />
                   
                </div>
                </AnchorLink>
            </div>
        </div>
        )
    }


}

