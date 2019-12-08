

import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
import { FiMenu, FiX, FiUser } from 'react-icons/fi';
import Fade from 'react-reveal/Fade'; // Importing Zoom effect


export default class Links extends Component {

    constructor() {
        super();
        this.state = { toggle: false };
    }

    menu = () => {

        this.state.toggle ? this.setState({ toggle: false }) : this.setState({ toggle: true })
    }


    Li = () => <span>
        {(window.location.pathname !== '/') ? <Link to="/"><div>Home</div></Link> : null}
        {(window.location.pathname !== '/work') ? <div><Link to="/work">Work</Link></div> : null}
        {(window.location.pathname !== '/achievements') ? <div><Link to="/achievements">Achievements</Link></div> : null}
        {(window.location.pathname !== '/team') ? <div><Link to="/team">People</Link></div> : null}

        {/* <div><Link to="/team">People</Link></div> */}
        <div>Blog</div>
        <div>Outreach</div>
    </span>

    render(props) {
        return (<div className={this.props.dark ? 'dark' : 'light'}>

            <div className={this.state.toggle ? 'overlay ti' : 'overlay'} >
                <div className='inner'>
                <this.Li />
                    {/* <div>Work</div>
                    <div>Achievements</div>
                    <div>People</div>
                    <div>Blog</div>
                    <div>Outreach</div> */}

                    <NavLink to="/login"><div>Login</div></NavLink>
                </div>

            </div>



            <div className="menu" onClick={this.menu}>
                {
                    this.state.toggle ? <FiX size={35} /> : <FiMenu size={35} />
                }

            </div>

            <Fade>
                <div className="links">


                    <this.Li />
                    <NavLink to="/login"> <div> <FiUser size={24} /></div></NavLink>


                </div>
            </Fade>
        </div>

        )
    }
}