import React from 'react';
import {Button} from 'reactstrap';
class MyButton extends React.Component{
    render(){
        return(
                <Button color = "primary" style ={{width:"75px"}} className = "ml-4" onClick = {this.props.onclick}>{this.props.value}</Button>
        )
    }
}
export default MyButton;