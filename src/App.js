import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyForm from './components/UI/Form/Form';
import MyNavbar from './components/UI/Navbar/Navbar';
import ResultsList from './components/UI/ResultList/ResultList';
import axios from './axios';

class App extends Component {
  state = {
    data : []
  }
  componentDidMount(){
    axios.get('/products.json')
    .then(res =>{
        let responseData = [];
        for(let prop in res.data){
            responseData.push({
                id : prop,
                name : res.data[prop].name,
                payment : res.data[prop].payment,
                price : res.data[prop].price,
                quantity : res.data[prop].qty,
                type : res.data[prop].type,
                url : res.data[prop].image
            });
        }
        this.setState({
            data: responseData
        })
    })
    .catch(error =>{
        console.log(error);
    });
}
  render() {
    return (
      <div className="App container-fluid">
        <MyNavbar />
        <div className="row ml-1 mb-5">
          <div className="card mt-2 float-left" style={{ width: "40%", borderWidth:"2px",borderColor:"#343a40"}}>
            <h1 className="ml-2" style = {{color:"#17a2b8"}}>Input Product Details</h1>
            <MyForm />            
          </div>
          <div className="card mt-2 float-left" style={{ width: "60%", borderWidth:"2px", borderColor:"#343a40"}}>
            <h1 style = {{color:"#17a2b8"}}>Product List</h1>
            <ResultsList products = {this.state.data}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;