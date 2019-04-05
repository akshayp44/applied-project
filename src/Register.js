import React from 'react';
import './App.css';
class Register extends React.Component {
render(){
    return(
        <div>
    <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
    </div>
    );
}
}
export default Register;