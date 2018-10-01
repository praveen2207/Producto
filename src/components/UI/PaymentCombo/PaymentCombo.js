import React from 'react';
import { FormGroup, Input } from 'reactstrap';
class ComboBox extends React.Component {
    render() {
        return (
            <FormGroup>
                <Input type="select" name="paymentCombo" id="paymentCombo" onChange = {this.props.onchange}>
                    <option>---Filter By Payment---</option>
                    <option>Card</option>
                    <option>COD</option>
                    <option>Both</option>
                </Input>
            </FormGroup>
        )
    }
}
export default ComboBox;