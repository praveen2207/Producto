import React from 'react';
import {Form} from 'reactstrap';
import InputText from '../Input/Input'
import ComboBox from '../ComboBox/ComboBox';
import CheckboxGroup from '../Checkbox/Checkbox';
import Radiogroup from '../Radio/Radio';
import MyButton from '../Button/Button';
import axios from '../../../axios';

class MyForm extends React.Component{
    state = {
        name : "",
        productType : "",
        URL : "",
        price : "",
        quantity : "",
        cities : [],
        payment : "",
        data : []
        }
    handleName = (nameInput) =>{
        this.setState({
            name : nameInput.target.value
        })
    }
    handleURL = (urlInput) =>{
        this.setState({
            URL : urlInput.target.value
        })
    }
    handlePrice = (priceInput) =>{
        this.setState({
            price : priceInput.target.value
        })
    }
    handleQuantity = (qtyInput) =>{
        this.setState({
            quantity : qtyInput.target.value
        })
    }
    handleProduct = (product) =>{
        this.setState({
            productType : product.target.value
        })
    }
    handlePayment = (payment) =>{
        this.setState({
            payment : payment.target.id
        })
    }
    handleCities = (city) =>{
        const list = city.target.che;
        this.setState({
            cities : list
        })
    }
    resetForm = () =>{
        document.getElementById("myForm").reset();
        console.log("Resetting")
    }
    handleUpdate = () =>{
        const name = this.state.name;
        const type = this.state.productType;
        const price = this.state.price;
        const qty = this.state.quantity;
        const payment = this.state.payment;
        const image = this.state.URL;
        axios.post('products.json',{name,type,price,qty,payment,image})
        .then(response => {
            console.log(response);
            document.getElementById("myForm").reset();
        })
        .catch(error => {
            console.log(error);
        })
    }
    render(){
        return(
            <div className = "col-6 mb-2">
            <Form id = "myForm">
                <InputText id = "textName" place = "Enter you name" type = "text" label = "Name :" onchange = {this.handleName}/>
                <ComboBox label = "Select Product Type" name = "productType" id = "productType" option1 = "Clothes" option2 = "Toys" option3 = "Appliances" option3 = "Electronics" option3 = "Footwear" option3 = "Watches" option3 = "Mobiles" option3 = "Laptops" onchange = {this.handleProduct}/>
                <InputText id = "imgURL" place = "Enter Image URL" type = "text" label = "Image URL :" onchange = {this.handleURL}/>
                <InputText id = "textPrice" place = "Enter Price" type = "number" label = "Price :" onchange = {this.handlePrice}/>
                <InputText id = "textQuantity" place = "Enter Quantity" type = "number" label = "Quantity :" onchange = {this.handleQuantity}/>
                <CheckboxGroup label = "Cities :" option1 = "Mumbai" option2 = "Delhi" option3 = "Bangalore" name = "cities" onchange = {this.handleCities}/>
                <Radiogroup label = "Payment Mode :" name = "paymentRadio" option1 = "Card" option2 = "COD" option3 = "Both" onchange = {this.handlePayment}/>   
                <MyButton value = "Save" onclick = {this.handleUpdate}/>
                <MyButton value = "Reset" onclick = {this.resetForm}/>
            </Form>
            </div>
        )
    }
}
export default MyForm;