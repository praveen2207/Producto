import React from 'react';
import { FormGroup, Input } from 'reactstrap';
class ComboBox extends React.Component {
    render() {
        return (
            <FormGroup>
                <Input type="select" name="filterCombo" id="filterCombo" onChange = {this.props.onchange}>
                    <option>---Filter By---</option>
                    <option id = "Clothes">ProductType : Clothes</option>
                    <option id = "Watches">ProductType : Watches</option>
                    <option id = "Toys">ProductType : Toys</option>
                    <option id = "Electronics">ProductType : Electronics</option>
                </Input>
            </FormGroup>
        )
    }
}
export default ComboBox;