

import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
import { FiMenu, FiX, FiUser } from 'react-icons/fi';
import Fade from 'react-reveal/Fade'; // Importing Zoom effect
import AnchorLink from 'react-anchor-link-smooth-scroll'


import './styles/Head.scss'

export default class Links extends Component {

    constructor() {
        super();
        this.state = { toggle: false };
    }

    componentDidMount() {  
        document.body.style.overflow = 'unset'; 
      }

    menu = () => {

        this.state.toggle ? this.setState({ toggle: false }) : (this.setState({ toggle: true }));
        
        if(this.state.toggle){
            document.body.style.overflow = 'unset'; // fix the scroll on the menu visible

        }
        else{
            document.body.style.overflow = 'hidden';

        }

    }

    outun= ()=>{
        document.body.style.overflow = 'unset'; 
        this.setState({ toggle: false }) 
    }


    Li = () => <span>
        {(window.location.pathname !== '/') ? <Link to="/"><div>Home</div></Link> : null}
         {/*{(window.location.pathname !== '/work') ? <div><Link to="/work">Work</Link></div> : null}*/} 
        {(window.location.pathname !== '/achievements') ? <Link to="/achievements"><div>Achievements</div></Link>: null}
        {(window.location.pathname !== '/team') ? <Link to="/team"><div>People</div></Link> : null}

        {/* <div><Link to="/team">People</Link></div> */}
        <a href="https://medium.com/syntechx" target="_blank"><div>Blog</div></a>
        {(window.location.pathname === '/') ?<AnchorLink offset='50' href="#reach" onClick={()=>{this.outun()}}> <div>Outreach</div></AnchorLink>: null}

    </span>

    render(props) {
        return (
        <div className={this.props.dark ? 'dark' : 'light'}>

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



            <div  onClick={this.menu} className={this.state.toggle ? 'white menu' : 'menu'}>
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