import React from 'react';


import Head from './Head';
import Main from './Main';

import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Login from './Login';


export default class Routes extends React.Component {
    render() {
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
                        <Login/>
                    </Route>
                </Switch>
            </Router>




        )
    }
}