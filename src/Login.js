import React, { Component } from 'react';
import { FiArrowLeft } from "react-icons/fi"; //icons
import './styles/login.scss';
import Fade from 'react-reveal/Fade'; // Importing Zoom effect
import { NavLink, Redirect } from 'react-router-dom'


import { Spinner } from 'reactstrap';

// import QuickEncrypt from 'quick-encrypt'

import {
    AwesomeButton,
} from 'react-awesome-button';

//   import  "react-awesome-button/src/styles/styles.scss";
import 'react-awesome-button/dist/themes/theme-blue.css';




export default class Login extends Component {

    state = { redirectToReferrer: false,loading:false }

    auttt = (event) => {
        this.setState({loading:true})
        // console.log('Authenticated ...')
        this.props.fakeAuth(this.state.user,this.state.pass,() => {
            this.setState({ redirectToReferrer: true,loading:false })
        }
        ,()=>{
            this.setState({error:true,loading:false})
            
        })

        event.preventDefault();

    }

    user = (e) => {
        this.setState({ user: e.target.value,error:false })
    }
    pass = (e) => {
        this.setState({ pass: e.target.value,error:false })
    }
    // constructor(props){
    //     super(props);
    //     console.log('login page')
    // }
    render() {
        const redirectToReferrer = this.state.redirectToReferrer

        if (redirectToReferrer === true) {
            return <Redirect to='/dashboard' />
        }

        return <div className='cont'>
            <NavLink to="/">    <FiArrowLeft size={30} /></NavLink>
            <Fade className="top">

                {/* <Container className="container">

                    <Row>
                       
                        <Col sm="12" md={{ size: 6, offset: 4 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
                    </Row>

                </Container> */}
                <div className="container">
                    <div className='logincont'>
                        <b>LOGIN</b>
                        <div className='space'></div>

                        <form action="" onSubmit={this.auttt}>

                        <div className="logincell">
                            <div class="group">
                                <input type="text" required value={this.state.user} onChange={this.user} />
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Username</label>
                            </div>
                            <div class="group">
                                <input type="password" required value={this.state.pass} onChange={this.pass} />
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Password</label>
                            </div>
                            {this.state.error?<p className='red'>Failed to Authenticate</p>:null}
                            
                         {this.state.loading?   <div className='whiteoverlay'></div>:null}
                            {this.state.loading? <Spinner className='loadings' color="primary" />:null}

                        </div>
                        <AwesomeButton size="large" type="primary" >Go > </AwesomeButton>

                </form>

                        {/* <div className='space'></div> */}






                    </div>

                </div>
            </Fade>

        </div>
    }
}