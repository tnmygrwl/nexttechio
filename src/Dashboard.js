import React from 'react'
import './styles/Dashboard.scss'
import './styles/inputs.scss'
import { FiLogOut, FiTrash2, FiPlusCircle } from 'react-icons/fi';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Button,Spinner,Fade } from 'reactstrap';
import axios from 'axios';

// import QuickEncrypt from 'quick-encrypt';


let apiUrl='' 

let list = [{
    title: 'wow'
}, {
    title: '2nd item'
}]

export default class Dashboard extends React.Component {

    // datalist = []

    constructor() {
        super();
         
        this.state = {
            id: '',
            title: '',
            des: '',
            msg: '',
            datalist: [],
            newslist: [],
            ae: 'Add a New',
            loading:false,
            existimage:'',
            segment:0,
            fadeIn:true,
            fadesegment:0,
            startDate: new Date()

        }

        setTimeout(()=>{        
            this.calldata()
            this.callnews()
        },100)
    }


    /// INITIATE DATA API LIST 
    calldata = () => {
        this.setState({loading:true})

        axios.get('http://localhost:5000/api/achievements/achievements').then(e => {
            console.log(e.data)
            this.setState({ datalist: e.data })
            this.setState({loading:false})

        })
    }
    callnews = () => {
        this.setState({loading:true})

        axios.get('http://localhost:5000/api/newsapi/news').then(e => {
            console.log(e.data)
            this.setState({ newslist: e.data})
            this.setState({loading:false})

        })
    }

    /////////


cleanFile=()=>{  // clear the input file field after 
    document.getElementsByClassName('input-image')[0].value = ''
}
    des = (e) => {
        this.setState({ des: e.target.value })
    }
    title = (e) => {
        this.setState({ title: e.target.value })
    }
    active = (e) => {

        console.log(e._id)
        this.setState({ id: e._id, title: e.name, des: e.description, msg: '', ae: 'Edit',existimage:e.imageUrl,flash:0 })
        setTimeout(() => {
            this.setState({flash:1})
        }, 1000);

        this.cleanFile()
    }

    activeNews = (e) => {

        console.log(e._id)
        this.setState({ id: e._id, title: e.name, des: e.description, msg: '', ae: 'Edit',existimage:e.imageUrl,flash:0,startDate:new Date(e.date) })
        setTimeout(() => {
            this.setState({flash:1})
        }, 1000);
    }


    new = () => {
        this.setState({ id: '', title: '', des: '', msg: '', ae: 'Add a New',existimage:'',flash:0})
        setTimeout(() => {
            this.setState({flash:1})
        }, 1000);

    try {
        this.cleanFile()
    } catch (error) {console.log(error)}
        
    }

    newNews = () => {
        this.setState({ id: '', title: '', des: '', msg: '', ae: 'Add a New',existimage:'',flash:0,            startDate: new Date()
    })
        setTimeout(() => {
            this.setState({flash:1})
        }, 1000);
    }


    delete = (e) => {
        this.setState({loading:true})

        let url = "http://localhost:5000/api/achievements/delete/" + e._id
        axios.post(url).then(() => {
        this.setState({loading:false})
        console.log('deleted')
        this.calldata()
        })

    }

    deleteNews = (e) => {
        this.setState({loading:true})

        let url = "http://localhost:5000/api/newsapi/delete/" + e._id
        axios.post(url).then(() => {
        this.setState({loading:false})
        console.log('deleted')
        this.callnews()
        })

    }





    handleSubmit = (event) => {
        console.log(1)
        this.setState({loading:true})


        if (this.state.id === '') {


            this.uploadImageApi(()=>{  // send below code as call back :) 
                axios.post('http://localhost:5000/api/achievements/achievements', {
                    name: this.state.title,
                    description: this.state.des,
                    imageUrl:this.state.imageUrl
                })
                    .then(() => {
                        // alert('An essay was submitted: ' + this.state.title);
                        this.setState({ id: '', title: '', des: '', msg: 'Saved Successfully!!' })
                        this.calldata()
                        this.setState({loading:false})
                        this.cleanFile()

                    })
                    .catch(function (error) {
                        console.log(error);
                        this.setState({loading:false})
    
                    });
            })

           

        }
        else {


            //Edit POSTTT!!!!
        
                if(document.getElementsByClassName('input-image')[0].files[0]===undefined){
                    axios.post('http://localhost:5000/api/achievements/edit', {
                        id: this.state.id,
                        name: this.state.title,
                        description: this.state.des,
                        // imageUrl:this.state.imageUrl,
                    })
                        .then(() => {
                            // alert('An essay was submitted: ' + this.state.title);
                            this.setState({ id: '', title: '', des: '', msg: 'Edit Successfully!!' })
                            this.calldata()
                            this.setState({loading:false,existimage:'', ae: 'Add a New',})    
                            this.cleanFile()
                        })
                        .catch(function (error) {
                            console.log(error);
                            this.setState({loading:false,existimage:'', ae: 'Add a New',})        
                        });
                }
            
                else{
                    this.uploadImageApi(()=>{
                        axios.post('http://localhost:5000/api/achievements/edit', {
                            id: this.state.id,
                            name: this.state.title,
                            description: this.state.des,
                            imageUrl:this.state.imageUrl,
                        })
                            .then(() => {
                                // alert('An essay was submitted: ' + this.state.title);
                                this.setState({ id: '', title: '', des: '', msg: 'Edit Successfully!!' })
                                this.calldata()
                                this.setState({loading:false,existimage:'', ae: 'Add a New',})
                                this.cleanFile()

                            })
                            .catch(function (error) {
                                console.log(error);
                                this.setState({loading:false,existimage:'', ae: 'Add a New',})
            
                            });
                    })
                }
           






        }





        event.preventDefault();
    }



    handleNewsSubmit = (event) => {
        console.log(1)
        this.setState({loading:true})

        if (this.state.id === '') {



                axios.post('http://localhost:5000/api/newsapi/createnews', {
                    description: this.state.des,
                    date:this.state.startDate
                })
                    .then(() => {
                        // alert('An essay was submitted: ' + this.state.title);
                        this.setState({ id: '',des: '',startDate: new Date(), msg: 'Saved Successfully!!' })
                        this.callnews()
                        this.setState({loading:false})

                    })
                    .catch(function (error) {
                        console.log(error);
                        this.setState({loading:false})
    
                    });


           

        }
        else {


            //Edit NEWS!!!!
                axios.post('http://localhost:5000/api/newsapi/edit', {
                    id: this.state.id,
                    description: this.state.des,
                    date:this.state.startDate

                })
                    .then(() => {
                        // alert('An essay was submitted: ' + this.state.title);
                        this.setState({ id: '',des: '',startDate: new Date(), msg: 'Edit Successfully!!' })
                        this.callnews()
                        this.setState({loading:false,existimage:'', ae: 'Add a New',})

                    })
                    .catch(function (error) {
                        console.log(error);
                        this.setState({loading:false, ae: 'Add a New',})
    
                    });






        }





        event.preventDefault();
    }



    
    uploadImageApi= (callback)=>{

        let wow = new Promise((resolve,reject)=>{
           
        const r = new XMLHttpRequest()
        const d = new FormData()
        const e = document.getElementsByClassName('input-image')[0].files[0]
        
        d.append('image', e)

        r.open('POST', 'https://api.imgur.com/3/image/')
        r.setRequestHeader('Authorization', `Client-ID ca58912e5616dc0`)
        r.send(d)
        r.onreadystatechange =()=> {
            if(r.status === 200 && r.readyState === 4) {
              let res = JSON.parse(r.responseText)
              this.setState({imageUrl:`https://i.imgur.com/${res.data.id}.png`}) 
              resolve() // call the res :D
            } 
            if(r.status === 400){
                reject()
            }
        
       
        }
        })

        wow.then(()=>{
            callback()   // call the call back once the image is uploaded :) 
        }).catch(()=>{
            console.log('Erro img api')
            this.setState({errorImageAPI:true})
            this.setState({loading:false})
        })

}


flashFade=(ll)=>{
    this.setState({fadeIn:false})
    setTimeout(() => {
        this.setState({fadeIn:true})
    }, 100);


    let a=0;
    ll==0?a=0:a=1;
    setTimeout(()=>{
        this.setState({fadesegment:a})
    },200)

}
       



    render() {

        return <div className='dashboard'>
            {/* <this.props.loggout/> */}

            <a href='./login'>
                <FiLogOut className='logout' size={35} /> </a>



            <div className={'ff '+ (this.state.flash==='0'?'shadoww':'n')}>
                <h4>{this.state.ae} {this.state.segment===0?'Achievement':'News'}</h4>
                <br /><br />

                    {this.state.segment===0?
                <form action="" onSubmit={this.handleSubmit}>    {/*for Achiements*/}
                    <div class="group">
                        <input type="text" required value={this.state.title} onChange={this.title} />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Title </label>
                    </div>

                    <div class="group">
                        <input type="text" required value={this.state.des} onChange={this.des} />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Description</label>
                    </div>

                    {this.state.existimage?<div style={{marginBottom:20}}>Image -> <img style={{maxHeight:250}} src={this.state.existimage}/></div>:null}

                    <b>{this.state.existimage?<span>Replace </span> :null}Image: </b> <input className="input-image" type="file" />
                    <br />
                    

                    {this.state.msg ? (<span className='green'><br />{this.state.msg}<br /></span>) : null}
                    {this.state.errorImageAPI===true?<span style={{color:'red'}}>Error Uploading Image :(</span>:null}
                    <br />

                    <Button color="success" size='sm' block> Save</Button><br/>

                    {this.state.loading? <Spinner color="primary" />:null}
                </form>
                :
                <form action="" onSubmit={this.handleNewsSubmit}>  {/*for NEWs*/}
                    <div class="group">
                        <input type="text" required value={this.state.des} onChange={this.des} />
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Description</label>
                    </div>                    

                    <div class="group">
                        Date     <DatePicker style={{zIndex:20}} dateFormat='dd/MM/yyyy' selected={this.state.startDate} onChange={(date)=>{this.setState({startDate:date})}}/>
                        </div>

                    {this.state.msg ? (<span className='green'><br />{this.state.msg}<br /></span>) : null}
                    {this.state.errorImageAPI===true?<span style={{color:'red'}}>Error Uploading Image :(</span>:null}
                    <br />

                    <Button color="success" size='sm' block> Save</Button><br/>

                    {this.state.loading? <Spinner color="primary" />:null}
                </form>}



            </div>



            <div className='sideContainer'>
                <h3>Dashboard </h3>

                <div className="segment">
                        <div className={this.state.segment===0?'shadowww':''} onClick={()=>{this.setState({segment:0});this.flashFade(0);this.new()}}>Achievements</div>
                        <div className={this.state.segment===1?'shadowww':''} onClick={()=>{this.setState({segment:1});this.flashFade(1);this.new()}}>  News  </div>
                </div>



                {this.state.fadesegment===0?
                    <Fade in={this.state.fadeIn} >
                    <div className='list' onClick={() => this.new()}> 
                        <div><FiPlusCircle className='' size={20} /> ‏‏‎ ‎‏‏‎ ‎Add New Item</div>
                    </div>
                    {this.state.datalist.map((v, k) => {
                        return (
                            <div className='list'>
                                <div onClick={() => this.active(v)}>{v.name}

                                </div>
                                <FiTrash2 className='trash' onClick={() => this.delete(v)} size={20} />
                            </div>

                        )
                    })}
                </Fade>:
                <Fade in={this.state.fadeIn}  >

                <div className='list' onClick={() => this.newNews()}> 
                        <div><FiPlusCircle className='' size={20} /> ‏‏‎ ‎‏‏‎ ‎Add New Item</div>
                    </div>
                    {this.state.newslist.map((v, k) => {
                        return (
                            <div className='list'>
                                <div onClick={() => this.activeNews(v)}>{v.description}

                                </div>
                                <FiTrash2 className='trash' onClick={() => this.deleteNews(v)} size={20} />
                            </div>

                        )
                    })}

                    
        </Fade>}
               






            </div>


        </div>

    }

}