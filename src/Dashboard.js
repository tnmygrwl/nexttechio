import React from 'react'
import './styles/Dashboard.scss'
import './styles/inputs.scss'
import { FiLogOut, FiTrash2, FiPlusCircle } from 'react-icons/fi';


import { Button,Spinner } from 'reactstrap';
import axios from 'axios';

// import QuickEncrypt from 'quick-encrypt';


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
            ae: 'Add a New',
            loading:false
        }

        setTimeout(()=>{        
            this.calldata()
        },100)
    }

    calldata = () => {
        this.setState({loading:true})

        axios.get('http://localhost:5000/api/achievements/achievements').then(e => {
            console.log(e.data)
            this.setState({ datalist: e.data })
            this.setState({loading:false})

        })
    }

    des = (e) => {
        this.setState({ des: e.target.value })
    }
    title = (e) => {
        this.setState({ title: e.target.value })
    }
    active = (e) => {

        console.log(e._id)
        this.setState({ id: e._id, title: e.name, des: e.description, msg: '', ae: 'Edit' })
    }
    new = () => {
        this.setState({ id: '', title: '', des: '', msg: '', ae: 'Add a New' })
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


    handleSubmit = (event) => {
        console.log(1)
        this.setState({loading:true})


        if (this.state.id === '') {

            axios.post('http://localhost:5000/api/achievements/achievements', {
                name: this.state.title,
                description: this.state.des
            })
                .then(() => {
                    // alert('An essay was submitted: ' + this.state.title);
                    this.setState({ id: '', title: '', des: '', msg: 'Saved Successfully!!' })
                    this.calldata()
                    this.setState({loading:false})

                })
                .catch(function (error) {
                    console.log(error);
                    this.setState({loading:false})

                });

        }
        else {




            axios.post('http://localhost:5000/api/achievements/edit', {
                id: this.state.id,
                name: this.state.title,
                description: this.state.des
            })
                .then(() => {
                    // alert('An essay was submitted: ' + this.state.title);
                    this.setState({ id: '', title: '', des: '', msg: 'Edit Successfully!!' })
                    this.calldata()
                    this.setState({loading:false})

                })
                .catch(function (error) {
                    console.log(error);
                    this.setState({loading:false})

                });






        }





        event.preventDefault();
    }



    render() {

        return <div className='dashboard'>
            {/* <this.props.loggout/> */}

            <a href='./login'>
                <FiLogOut className='logout' size={35} /> </a>



            <div className='ff'>
                <h4>{this.state.ae} Achievement</h4>
                <br /><br />

                <form action="" onSubmit={this.handleSubmit}>
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
                    <b>Image: </b> <input type="file" />
                    <br />

                    {this.state.msg ? (<span className='green'><br />{this.state.msg}<br /></span>) : null}

                    <br />


                    <Button color="success" size='sm' block> Save</Button><br/>

                    {this.state.loading? <Spinner color="primary" />:null}
                   

                </form>




            </div>



            <div className='sideContainer'>
                <h3>Dashboard </h3>
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




            </div>


        </div>

    }

}