import React, { Component } from 'react';
import { FiArrowLeft } from "react-icons/fi"; //icons
import './styles/login.scss';
import Fade from 'react-reveal/Fade'; // Importing Zoom effect
import { NavLink } from 'react-router-dom'


import {
    AwesomeButton,
  } from 'react-awesome-button';

//   import  "react-awesome-button/src/styles/styles.scss";
import 'react-awesome-button/dist/themes/theme-blue.css';




export default class Login extends Component {

    render() {
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

                            <div className='space'></div>
                        <label for="inp" class="inp">
                            <input type="text" id="inp" placeholder="&nbsp;"/>
                                <span class="label">User Name</span>
                                <span class="border"></span>
                            </label>
                            <div className='space'></div>
                            <label for="inp" class="inp">
                            <input type="password" id="inp" placeholder="&nbsp;"/>
                                <span class="label">Password</span>
                                <span class="border"></span>
                            </label>
                            <br></br><br></br>
                            
                            <AwesomeButton size="large" type="primary">Go > </AwesomeButton>


                        </div>

                    </div>
            </Fade>

        </div>
            }
}