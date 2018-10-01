import React from 'react';
import {Button} from 'reactstrap'
const ResultsList = (props) => {
    const listOfProducts = props.products.map(appn => {
        return (
            <div className="card mb-1 mr-1" style={{ borderColor: "grey", borderWidth: "2px" }}>
                <div className="figure">
                    <div className="row mb-2">
                        <div className="col-4">
                            <img className="img-thumbnail" alt={appn.name} src={appn.url} height="200px" width="200px" style={{ float: "left", clear: "left", margin: "5px", borderColor: "grey" }} />
                        </div>
                        <div className="col-7">
                            <span className="card-body">
                                <h4 style={{ color: "tomato" }}>{appn.name}</h4>
                                <p>Category : {appn.type}</p>
                                <p>Price : Rs. {appn.price}</p>
                                <p>Quantity : {appn.quantity}</p>
                                Availability :<ul type="none" key = {appn.id}><li>{appn.cities[0]}</li><li>{appn.cities[1]}</li><li>{appn.cities[2]}</li></ul>
                                <Button onClick = {props.onclick} id = {appn.id}>Delete</Button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    })
    return <div className="ml-2 mt-5" id="list">{listOfProducts}</div>;
}
export default ResultsList;