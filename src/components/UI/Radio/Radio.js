import React from 'react';
import { FormGroup,CustomInput, Label } from 'reactstrap';
class Radiogroup extends React.Component {
    render() {
        return (
            <FormGroup>
                <Label>{this.props.label}</Label>
                <div onChange = {this.props.onchange}>
                    <CustomInput type="radio" id={this.props.option1} name={this.props.name} label={this.props.option1} />
                    <CustomInput type="radio" id={this.props.option2} name={this.props.name} label={this.props.option2} />
                    <CustomInput type="radio" id={this.props.option3} name={this.props.name} label={this.props.option3} />
                </div>
            </FormGroup>
        )
    }
}
export default Radiogroup;