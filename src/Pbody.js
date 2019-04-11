import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Slider from './Slider'
import Register from './Register'
import OrgRegister from './OrgRegister'
import Login from './Login'
//import Schedule from './Schedule'
class Pbody extends Component{
    render(){
        return(
            <Switch>
                <Route exact path='/' component={Slider}/>
                <Route path='/Register' component={Register}/>
                <Route path='/OrgRegister' component={OrgRegister}/>
                <Route exact path='/Login' component={Login}/>
            </Switch>
        );
    }
}
export default Pbody;
