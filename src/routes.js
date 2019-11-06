import React from 'react';


import Head from './Head';
import Main from './Main';
import Dashboard from './Dashboard';

import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,Redirect,withRouter
} from "react-router-dom";
import Login from './Login';


const fakeAuth={
    isAuthenticated:false,
    authenticate(cb){
        this.isAuthenticated = true
        setTimeout(cb,100)
    },
    signout(cb){
        this.isAuthenticated=false
        setTimeout(cb,100)
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

let PrivateRoute =  ({ component:Component, ...rest}) =>(
<Route {...rest} render={(props)=>(
    fakeAuth.isAuthenticated===true? 
    <Component {...props}/>
    : <Redirect to='/login' />
)}/>
)




export default class Routes extends React.Component {

    childCallback = (cb)=>{
        console.log('Authenticated ...')
        fakeAuth.authenticate() // call the authen for allowing the dashboard link
        setTimeout(cb,100); /// calls the callback so that it can redirect in the child component
    }
    

    render() {

    //     const redirectToReferrer  = this.state.redirectToReferrer

    //     if (redirectToReferrer === true) {
    //   return <Dashboard/>
    //     }

        return (
            <Router>
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
                    <Login fakeAuth={this.childCallback}/> 

                    </Route>

                    <PrivateRoute path="/dashboard" component={Dashboard} />
                        {/* <Dashboard/> */}
                        {/* {redirectToReferrer===true?<Redirect to='/dashboard' />:null} */}

                </Switch>
            </Router>




        )
    }
}