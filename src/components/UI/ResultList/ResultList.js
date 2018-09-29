import React from 'react';
const ResultsList = (props) => {
    const listOfProducts = props.products.map(appn => {
        return(
            <div className = "card mb-1 mr-2" style = {{borderColor:"grey",borderWidth:"2px"}}>
                <div className = "figure">
                    <img className = "img-thumbnail" alt = {appn.name} src = {appn.url} height = "200px" width = "200px" style = {{float:"left",clear:"left",margin:"5px",borderColor:"grey"}}/>
                    <span className = "card-body">
                        <h4 style = {{color:"tomato"}}>{appn.name}</h4>
                        <p>Category : {appn.type}</p>
                        <p>Price : Rs. {appn.price}</p>
                        <p>Quantity : {appn.quantity}</p>
                    </span>
                </div>
            </div>
            );
    })
    return <div className = "ml-2">{listOfProducts}</div>;
}
export default ResultsList;