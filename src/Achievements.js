import React from "react";
import { Container, Row, Col } from "reactstrap"; //for row & column
import Links from "./Links";
import moment from "moment";
import Axios from "axios";
import Fade from "react-reveal/Fade"; // Importing Zoom effect
import { Button,Spinner } from 'reactstrap';

import BottomScrollListener from "react-bottom-scroll-listener";

import data from './sample-date'

export default class Achievement extends React.Component {
  constructor() {
    super();
    this.getAchievements();
    this.state = { Achievements: [], flag: 6,listEnd:1 }; //flag is the initial post show 
    console.log(data)
  }



  getAchievements = () => {
    console.log(11);
    Axios.get("http://localhost:5000/api/achievements/achievements").then(e => {
      console.log(e.data);
      this.setState({ Achievements: e.data});
      // this.setState({loading:false})
    });
  };



  end = () => {
    console.log(1);
    this.setState({ flag: this.state.flag + 5 ,loading:true});  // + 5 is the post to load more in each colomn
    setTimeout(() => {
            this.setState({loading:false})
    }, 1000);
  };

  render() {
    return (
      <div className="achievement" onScroll={this.handleScroll}>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins&display=swap"
          rel="stylesheet"
        />

        <Links dark={true} />

        <br></br>
        <br></br>
        <span className='til'></span>

        <h1 className="center">Achievements</h1>
        <Fade>
          <Row className="desk">
            <Col>
              <div className="gallery">
                <div class="column">
                  {this.state.Achievements.map((v, k) => {
                    if (k % 2 === 0 && k < this.state.flag)
                      return (
                        <div className="imageContainer">
                          <div className="t2">{v.name}</div>
                          <div className="t3">{v.description}</div>
                          <div className="_time">
                            {" "}
                            {moment(v.date).format("MMMM YY")}
                          </div>
                          <div className="imgFlex">
                            <img src={v.imageUrl} width={"100%"} />
                          </div>
                        </div>
                      );
                  })}
                </div>

                <div class="column">
                  {this.state.Achievements.map((v, k) => {
                    if (k % 2 != 0 && k < this.state.flag )
                      return (
                        <div className="imageContainer">
                          <div className="t2">{v.name}</div>
                          <div className="t3">{v.description}</div>
                          <div className="_time">
                            {" "}
                            {moment(v.date).format("MMMM YY")}
                          </div>
                          <div className="imgFlex">
                            <img src={v.imageUrl} width={"100%"} />
                          </div>
                        </div>
                      );
                  })}
                </div>
              </div>
            </Col>
          </Row>


          <div className="mob">
                  {this.state.Achievements.map((v, k) => {
                    if (k < this.state.flag){
                    
                      return (
                        <div className="imageContainer">
                          <div className="t2">{v.name}</div>
                          <div className="t3">{v.description}</div>
                          <div className="_time">
                            {" "}
                            {moment(v.date).format("MMMM YY")}
                          </div>
                          <div className="imgFlex">
                            <img src={v.imageUrl} width={"100%"} />
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>




          <BottomScrollListener offset={100} onBottom={this.end} />
        </Fade>
        {/* {this.state.loading && this.state.listEnd===1 ? <Spinner className='loader' color="primary" />:null} */}
      </div>
    );
  }
}
