import React from 'react';
import {Label} from 'reactstrap';
class MyLabel extends React.Component{
    render(){
        return(
            <Label>{this.props.value}</Label>
        )
    }
}
export default MyLabel;