import React from 'react';
import { FormGroup, Input } from 'reactstrap';
class ComboBox extends React.Component {
    render() {
        return (
            <FormGroup>
                <Input type="select" name="sortCombo" id="sortCombo" onChange = {this.props.onchange}>
                    <option>---Sort By---</option>
                    <option>Price : Low to High</option>
                    <option>Price : High to Low</option>
                    <option>Quantity : Low to High</option>
                    <option>Quantity : High to Low</option>
                </Input>
            </FormGroup>
        )
    }
}
export default ComboBox;