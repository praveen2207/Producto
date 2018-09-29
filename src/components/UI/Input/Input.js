import React,{Component} from 'react';
import {Input, Label, FormGroup} from 'reactstrap';
export default class InputText extends Component{
    // state = {
    //     value : ''
    // }
    // handleUpdate = (e) => {
    //     this.setState({
    //         value : 
    //     })
    //     console.log(this.state.value)
    //     this.props.onchange(this.state.value)
    // }
    render(){
        return(
            <FormGroup>
                <Label for = {this.props.id}>{this.props.label}</Label>
                <Input type = {this.props.type} id = {this.props.id} placeholder = {this.props.place} onChange = {this.props.onchange}/>
            </FormGroup>
        )
    }
}