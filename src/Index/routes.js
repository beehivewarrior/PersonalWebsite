import React, {Component} from 'react';
import {Route} from "react-router";
import { BrowserRouter } from 'react-router-dom';
import App from "../Home/App";
import Resume from "../Resume/resume";

export default class Routes extends Component{
    render() {
        return(
            <BrowserRouter>
                <Route exact path={"/"} component={App}/>
                <Route path={"/resume"} component={Resume}/>
                {/*<Route path={"/contact"} component={contact}/>*/}
            </BrowserRouter>
        )
    }

}