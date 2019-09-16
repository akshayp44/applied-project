import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Slider from './Slider'
import Register from './Register'
import OrgRegister from './OrgRegister'
import Login from './Login'
<<<<<<< HEAD
import Gallery from './Gallery'
import About from './About'
import Contact from './Contact'
import MemberInfo from './MemberInfo'
import Resource from './Resource'
import Education from './Education'
import Development from './Development';
import Healthcare from './Healthcare';
import Donate from './Donate';
=======
import dashbord from './dashbord'
//import Schedule from './Schedule'
>>>>>>> 724d4239cc107e97e39ba11ce97bc877928ea2b9
class Pbody extends Component{
    render(){
        return(
            <Switch>
                <Route exact path='/' component={Slider}/>
                <Route path='/Register' component={Register}/>
                <Route path='/OrgRegister' component={OrgRegister}/>
                <Route exact path='/Login' component={Login}/>
<<<<<<< HEAD
                <Route exact path='/Gallery' component={Gallery}/>
                <Route exact path='/About' component={About}/>
                <Route exact path='/Contact' component={Contact}/>
                <Route exact path='/MemberInfo' component={MemberInfo}/>
                <Route exact path='/Resource' component={Resource}/>
                <Route exact path='/Education' component={Education}/>
                <Route exact path='/Development' component={Development}/>
                <Route exact path='/Healthcare' component={Healthcare}/>
                <Route exact path='/Donate' component={Donate}/>
=======
                <Route exact path='/dashbord' component={dashbord}/>
>>>>>>> 724d4239cc107e97e39ba11ce97bc877928ea2b9
            </Switch>
        );
    }
}
<<<<<<< HEAD
export default Pbody;
=======
export default Pbody;
>>>>>>> 724d4239cc107e97e39ba11ce97bc877928ea2b9
