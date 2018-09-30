import React from 'react';
import { FormGroup, Input } from 'reactstrap';
class ComboBox extends React.Component {
    render() {
        return (
            <FormGroup>
                <Input type="select" name="filterCombo" id="filterCombo" onChange = {this.props.onchange}>
                    <option>---Filter By---</option>
                    <option>ProductType : Clothes</option>
                    <option>ProductType : Watches</option>
                    <option>ProductType : Appliances</option>
                </Input>
            </FormGroup>
        )
    }
}
export default ComboBox;