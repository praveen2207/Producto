import React from 'react';
import './Checkbox.css';
import {FormGroup, Label, CustomInput } from 'reactstrap';
class CheckboxGroup extends React.Component{
    render(){
        return(
            <FormGroup>
                <Label>{this.props.label}</Label>
                <div>
                    <CustomInput type="checkbox" id={this.props.option1} label={this.props.option1} className = "select" name ={this.props.name} onChange = {this.props.onchange}/>
                    <CustomInput type="checkbox" id={this.props.option2} label={this.props.option2} className = "select" name ={this.props.name} onChange = {this.props.onchange}/>
                    <CustomInput type="checkbox" id={this.props.option3} label={this.props.option3} className = "select" name ={this.props.name} onChange = {this.props.onchange}/>
                </div>
            </FormGroup>
        )
    }
}
export default CheckboxGroup;