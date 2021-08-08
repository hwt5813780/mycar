import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import StaffList from "./pages/staffList";
import NotFound from "../notFound/notFound";

export default class Staff extends Component {
    render() {
        return (
            <Switch>
                <Route path={'/staff'} component={StaffList}/>
                <Route component={NotFound}/>
            </Switch>
        );
    }
}