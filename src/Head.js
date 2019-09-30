import React, { Component } from 'react';
import './styles/Head.scss'
import Fade from 'react-reveal/Fade'; // Importing Zoom effect

import { FaAngleDown } from 'react-icons/fa';

import { FiMenu, FiX } from 'react-icons/fi';


export default class Head extends Component {
    constructor() {
        super();
        this.state = { toggle: false };
    }

    menu = () => {

        this.state.toggle ? this.setState({ toggle: false }) : this.setState({ toggle: true })
    }

    render() {
        return (<div>
            <div className={this.state.toggle ? 'overlay ti' : 'overlay'} >
                <div className='inner'>
                    <div>Work</div>
                    <div>Achievements</div>
                    <div>People</div>
                    <div>Blog</div>
                    <div>Outreach</div>
                </div>

            </div>
            <div className='head'>

                <Fade>
                    <div className="menu" onClick={this.menu}>
                        {
                            this.state.toggle ? <FiX size={35} /> : <FiMenu size={35} />
                        }

                    </div>
                    <div className="links">

                        <div>Work</div>
                        <div>Achievements</div>
                        <div>People</div>
                        <div>Blog</div>
                        <div>Outreach</div>

                    </div>

                    {/* {this.state.toggle?<div>true</div>:<div>false</div>} */}
                </Fade>
                <div className="hero">
                    <h1>WELCOME</h1>
                    INDIA'S FIRST MULTI-DISCIPINARY UNDERGRADE RESEARCH LAB
                </div>

                <div className="scroll">
                    Explore <br />
                    Next Tech Lab<br />
                    <FaAngleDown className='icon' size={20} />
                </div>
            </div>
        </div>
        )
    }


}

