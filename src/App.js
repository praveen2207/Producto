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
import CityCombo from './components/UI/ComboboxCity/ComboboxCity'
import PaymentCombo from './components/UI/PaymentCombo/PaymentCombo'

class App extends Component {
  state = {
    data : []
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
  sortByQuantityLH = () => {
    const listByPrice = this.state.data;
    listByPrice.sort((a,b) => {return a.quantity - b.quantity})
    this.setState({
      data : listByPrice
    })
  }
  sortByQuantityHL = () => {
    const listByPrice = this.state.data;
    listByPrice.sort((a,b) => {return b.quantity - a.quantity})
    this.setState({
      data : listByPrice
    })
  }
  sortBy = (e) => {
    const sorter = e.target.value;
    if(sorter === "Price : High to Low")
      this.sortByPriceHL();
    else if(sorter === "Price : Low to High")
      this.sortByPriceLH();
    else if(sorter === "Quantity : High to Low")
      this.sortByQuantityHL();
    else
      this.sortByQuantityLH();
  }
  filterBy = (e) => {
    const listBy = this.state.data;
    const filter = e.target.value;
    let result = [];
    if(filter === "ProductType : Clothes")
      result = listBy.filter((a) => {return a.type === "Clothes"})
    else if(filter === "ProductType : Watches")
      result = listBy.filter((a) => {return a.type === "Watches"})
    else if(filter === "ProductType : Toys")
      result = listBy.filter((a) => {return a.type === "Toys"})
    else if(filter === "ProductType : Electronics")
      result = listBy.filter((a) => {return a.type === "Electronics"})
    else
      this.componentDidMount()
    this.setState({
      data : result
    })
  }
  filterByCity = (e) => {
    const listByCity = this.state.data;
    const filter = e.target.value;
    let result = [];
    if(filter === "Bangalore")
      result = listByCity.filter((a) => {return a.cities.includes("Bangalore")})
    else if(filter === "Delhi")
      result = listByCity.filter((a) => {return a.cities.includes("Delhi")})
    else if(filter === "Mumbai")
      result = listByCity.filter((a) => {return a.cities.includes("Mumbai")})
    else
      this.componentDidMount();
    this.setState({
      data : result
    })
  }
  filterByPayment = (e) => {
    const listByPayment = this.state.data;
    const filter = e.target.value;
    let result = [];
    if(filter === "Card")
      result = listByPayment.filter((a) => {return a.payment === "Card"})
    else if(filter === "COD")
      result = listByPayment.filter((a) => {return a.payment === "COD"})
    else if(filter === "Both")
      result = listByPayment.filter((a) => {return a.payment === "Both"})
    else
      this.componentDidMount();
    this.setState({
      data : result
    })
  }
  deleter = (e) => {
    const id = e.target.id;
    axios.delete("./products/"+id+".json")
     .then(response => {console.log(response)})
     .catch(error => {console.log(error)})
    window.location.reload()
  }
  render() {
    return (
      <div className="App container-fluid">   
        <MyNavbar />
        <div className="row ml-1 mb-5">
          <div className="card mt-2 float-left" style={{ width: "30%", borderWidth: "2px", borderColor: "#343a40" }}>
            <h2 className="ml-2" style={{ color: "#17a2b8" }}>Input Product Details</h2 >
            <MyForm />
          </div>
          <div className="card mt-2 float-left" style={{ width: "70%", height: "800px", borderWidth: "2px", borderColor: "#343a40", overflowY: "auto", overflowX: "hidden" }}>
            <span><h1 style={{ color: "#17a2b8" }} className = "ml-2">Product List</h1></span>
            <div className="row mb-2">
              <span className = "ml-4"><SortCombo onchange = {this.sortBy}/></span>
              <span className = "ml-3"><FilterCombo onchange = {this.filterBy}/></span>
              <span className = "ml-3"><CityCombo onchange = {this.filterByCity}/></span>
              <span className = "ml-3"><PaymentCombo onchange = {this.filterByPayment}/></span>
            </div>
            <ResultsList products={this.state.data} onclick = {this.deleter}/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;