import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyForm from './components/UI/Form/Form';
import MyNavbar from './components/UI/Navbar/Navbar';
import ResultsList from './components/UI/ResultList/ResultList';
import axios from './axios';
import Footer from './components/UI/Footer/Footer';
import SortCombo from './components/UI/ComboboxSort/ComboboxSort'
import FilterCombo from './components/UI/ComboboxFilter/ComboboxFilter'

class App extends Component {
  state = {
    data: []
  }
  componentDidMount() {
    axios.get('/products.json')
      .then(res => {
        let responseData = [];
        for (let prop in res.data) {
          responseData.push({
            id: prop,
            name: res.data[prop].name,
            payment: res.data[prop].payment,
            price: res.data[prop].price,
            quantity: res.data[prop].qty,
            type: res.data[prop].type,
            url: res.data[prop].image,
            cities: res.data[prop].cityList
          });
        }
        this.setState({
          data: responseData
        })
      })
      .catch(error => {
        console.log(error);
      });
  }
  sortByPriceLH = () => {
    const listByPrice = this.state.data;
    listByPrice.sort((a,b) => {return a.price - b.price})
    this.setState({
      data : listByPrice
    })
  }
  sortByPriceHL = () => {
    const listByPrice = this.state.data;
    listByPrice.sort((a,b) => {return b.price - a.price})
    this.setState({
      data : listByPrice
    })
  }
  filterByProduct = () => {
    const listByProduct = this.state.data;
    const result = listByProduct.filter((a) => {return a.type === "Clothes"})
    this.setState({
      data : result
    })
  }
  render() {
    return (
      <div className="App container-fluid">
        <MyNavbar />
        <div className="row ml-1 mb-5">
          <div className="card mt-2 float-left" style={{ width: "40%", borderWidth: "2px", borderColor: "#343a40" }}>
            <h1 className="ml-2" style={{ color: "#17a2b8" }}>Input Product Details</h1>
            <MyForm />
          </div>
          <div className="card mt-2 float-left" style={{ width: "60%", height: "800px", borderWidth: "2px", borderColor: "#343a40", overflowY: "auto", overflowX: "hidden" }}>
            <span><h1 style={{ color: "#17a2b8" }} className = "ml-2">Product List</h1></span>
            <div className="row mb-2">
              <span className = "ml-4"><SortCombo/></span>
              <span className = "ml-5"><FilterCombo/></span>
            </div>
            <ResultsList products={this.state.data} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;