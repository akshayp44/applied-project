import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Slider from './Slider'
import Register from './Register'
import OrgRegister from './OrgRegister'

//import Schedule from './Schedule'
class Pbody extends Component{
    render(){
        return(
            <Switch>
                <Route exact path='/' component={Slider}/>
                <Route path='/Register' component={Register}/>
                <Route path='/OrgRegister' component={OrgRegister}/>
            </Switch>
        );
    }
}
export default Pbody;
