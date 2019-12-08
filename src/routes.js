import React from 'react';


import Head from './Head';
import Main from './Main';
import Dashboard from './Dashboard';

import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect, withRouter
} from "react-router-dom";
import Login from './Login';
import Axios from 'axios';
import Achievement from './Achievements';
import Team from './Team';
import Work from './Work';
import ProgressBar from "react-scroll-progress-bar"; //Add this line


const fakeAuth = {
    isAuthenticated: false,
    authenticate(name, pass, cb, rej) {

        Axios.post('http://localhost:5000/api/user/auth', {
            name: name,
            password: pass
        }).then((token) => {
            // console.log(token.data)
            if (token.data === 1) {
                this.isAuthenticated = true
                setTimeout(cb, 100)
            }
            else {
                this.isAuthenticated = false
                setTimeout(rej, 100)
            }
        }).catch(() => {
            this.isAuthenticated = false
            setTimeout(rej, 100)
        })






    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100)
    }
}

let AuthButton = withRouter(({ history }) => (
    fakeAuth.isAuthenticated ? (
        <p>
            Welcome! <button onClick={() => {
                fakeAuth.signout(() => history.push('/'))
            }}>Sign out</button>
        </p>
    ) : (
            <p>You are not logged in.</p>
        )
))

//   const CheckLogin = (({ history }) => (
//     fakeAuth.isAuthenticated ? (
//       <Redirect to='/dashboard'/>
//     ) : (
//         <Login fakeAuth={this.childCallback}/>
//     )
//   ))



// const Public = () => <h3>Public</h3>
// const Dashboard = () => <h3>This is Dashboard</h3>

let PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        fakeAuth.isAuthenticated === true ?
            <Component {...props} />
            : <Redirect to='/login' />
    )} />
)




export default class Routes extends React.Component {

    propcall = (name, pass, cb, rej) => {
        console.log('Authenticated ...')
        fakeAuth.authenticate(name, pass, cb, rej) // call the authen for allowing the dashboard link
        // setTimeout(cb,100); /// calls the callback so that it can redirect in the child component
    }


    render() {

        //     const redirectToReferrer  = this.state.redirectToReferrer

        //     if (redirectToReferrer === true) {
        //   return <Dashboard/>
        //     }

        return (
            <Router>
             <ProgressBar  bgcolor="#017CFF" duration="0.2" />

                <Switch>
                    {/* If the current URL is /about, this route is rendered
    while the rest are ignored */}
                    <Route exact path="/">
                        <div className='main'>


                            <Head />
                            <Main />
                        </div>

                    </Route>
                    <Route path="/login">
                        <Login fakeAuth={this.propcall} />
                    </Route>

                    <Route path="/achievements"><Achievement/></Route>
                    <Route path="/team"><Team/></Route>
                    <Route path="/work"><Work/></Route>

                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    {/* <Dashboard/> */}
                    {/* {redirectToReferrer===true?<Redirect to='/dashboard' />:null} */}
                    <Route path='*' exact={true} component={() => { return (<h4 >404 </h4>) }} />

                </Switch>
            </Router>




        )
    }
}