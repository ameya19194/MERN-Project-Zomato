import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import './OrderDisplay.css';

var orderurl = "http://localhost:5000/orders";

class OrderDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: "",
        }

    }

    renderTable = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <tr>
                        <td>{item.order_id}</td>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.person}</td>
                        <td>{item.restId}</td>
                        <td>{item.restname}</td>
                    </tr>
                );
            });
        }
    }

    render() {
        return (
            <div className="container">
                <Navbar></Navbar>
                <div class="panel panel-primary">
                    <div class="panel-heading"><h3 style={{ marginTop: "10px", fontSize: "20px" }}>Your Orders</h3></div>
                </div>
                <div class="tablediv">
                    <table class="table table-dark table-striped table-bordered xyz">
                        <thead className="thead-dark">
                            <tr>
                                <th><h4 style={{ fontSize: "15px" }} className="abc">Order id</h4></th>
                                <th><h4 style={{ fontSize: "15px" }} className="abc">Name</h4></th>
                                <th><h4 style={{ fontSize: "15px" }} className="abc">Address</h4></th>
                                <th><h4 style={{ fontSize: "15px" }} className="abc">No of Persons</h4></th>
                                <th><h4 style={{ fontSize: "15px" }} className="abc">Restaurant id</h4></th>
                                <th><h4 style={{ fontSize: "15px" }} className="abc">Restaurant name</h4></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTable(this.state.orders)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    componentDidMount() {
        fetch(`http://localhost:5000/orders`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ orders: data });
            });
    }
}
export default OrderDisplay;