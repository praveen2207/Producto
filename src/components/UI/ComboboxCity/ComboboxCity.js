import React from 'react';
import { FormGroup, Input } from 'reactstrap';
class ComboBox extends React.Component {
    render() {
        return (
            <FormGroup>
                <Input type="select" name="cityCombo" id="cityCombo" onChange = {this.props.onchange}>
                    <option>---Filter By City---</option>
                    <option>Bangalore</option>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                </Input>
            </FormGroup>
        )
    }
}
export default ComboBox;