import React from 'react';
import Links from './Links'
import Fade from 'react-reveal/Fade'; // Importing Zoom effect

import './styles/team.scss'
import './styles/nextech-background.jpg'
import { FiFacebook, FiInstagram, FiLinkedin,FiGithub } from "react-icons/fi";

let Social =(props)=> <span className='social'>
   {props.linkedin?<a style={{color:'#212529'}} href={props.linkedin} target="_blank"><FiLinkedin size={20}/></a>:null}
    {props.github?<a style={{color:'#212529'}} href={props.github} target="_blank"><FiGithub size={20}/></a>:null}
</span>

export default class Team extends React.Component {

render(){

    return(<div className='team'>

         <Links dark={true}/> 
         
         <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet"/>
            <br></br>
            <br></br>
            <span className='til'></span>

            <Fade>
            
            <h1 className='center'> Founders </h1>
            
            <div className='container_team'>
                <div className='container_child'>
                    <div><Social linkedin="http://www.linkedin.com/in/raghav-Gupta-59379110b" github="http://www.github.com/raghavgupta0296"/><img src="https://media.licdn.com/dms/image/C5603AQHlzFi2PwO8yg/profile-displayphoto-shrink_800_800/0?e=1581552000&v=beta&t=sKgE2WvvkAJ6aGLACJkA3alBGmCmdHcCSowRpma1t7A" alt=""/><br/>Raghav Gupta </div>
                    <div><Social linkedin='http://www.linkedin.com/in/anshumanpandey1' github=''/><img src="https://media.licdn.com/dms/image/C5103AQFFrqEz0IgO0w/profile-displayphoto-shrink_800_800/0?e=1581552000&v=beta&t=Se4f8iYljpz5TnWxZD7WOiDTrDbMJ4hidfUAkV-cO5s" alt=""/><br/>Anshuman Pandey</div>
                    <div><Social linkedin='http://www.linkedin.com/in/rohan-pooniwala' github='http://www.github.com/rohanpooniwala'/><img src="https://media.licdn.com/dms/image/C5103AQHdI7ruoLoaiQ/profile-displayphoto-shrink_800_800/0?e=1581552000&v=beta&t=1_jMSaa2HlKoVkz1klpuim1myVdYQzQXlCpFhw_-d_c" alt=""/><br/>Rohan Pooniwala</div>
                    <div><Social linkedin='http://www.linkedin.com/in/rohit-saha-ai' github='http://www.github.com/RohitSaha'/><img src="https://media.licdn.com/dms/image/C5103AQGVzUNalRoM7A/profile-displayphoto-shrink_800_800/0?e=1582156800&v=beta&t=4CymUybu-InmwzbozcGS25b-R58kOXu6Y6C6OiNuSU4" alt=""/><br/>Rohit Saha</div>
                    <div><Social linkedin='http://www.linkedin.com/in/fenil-doshi-ai' github='http://www.github.com/feziodoshi'/><img src="https://media.licdn.com/dms/image/C5603AQHDS9UIVGrfwA/profile-displayphoto-shrink_800_800/0?e=1582156800&v=beta&t=7FFm870-wNkRR3zCPRv_dhBkGALqhtUSG9GbOXkiUDo" alt=""/><br/>Fenil Doshi</div>
                    <div><Social linkedin='http://www.linkedin.com/in/aditthya' github='http://www.github.com/ad137hya'/><img src="https://media.licdn.com/dms/image/C5103AQHrZ_amylbKLA/profile-displayphoto-shrink_800_800/0?e=1582156800&v=beta&t=uH_n6mrvf2nKg0XZEnb4owkGpBhSYICMRTG70vulyzI" alt=""/><br/>Aditthya Ramakrishnan</div>
                </div>
            </div>
            </Fade>
    </div>)
}

}