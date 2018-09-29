import React from 'react';
import { FormGroup, Input, Label} from 'reactstrap';
class ComboBox extends React.Component {
    render() {
        return (
            <FormGroup>
                <Label>{this.props.label}</Label>
                <Input type="select" name={this.props.name} id={this.props.id} onChange = {this.props.onchange}>
                    <option>---SELECT---</option>
                    <option>{this.props.option1}</option>
                    <option>{this.props.option2}</option>
                    <option>{this.props.option3}</option>
                    <option>{this.props.option4}</option>
                    <option>{this.props.option5}</option>
                    <option>{this.props.option6}</option>
                    <option>{this.props.option7}</option>
                    <option>{this.props.option8}</option>
                </Input>
            </FormGroup>
        )
    }
}
export default ComboBox;