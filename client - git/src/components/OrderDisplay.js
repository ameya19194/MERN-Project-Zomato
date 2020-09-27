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
            return data.map((val, index, array) => {
                var item = data[data.length - 1 - index];
                return (
                    // <div class="tab">
                    //     <h4 className="uvw"><span>Order id: </span>{item.order_id}</h4>
                    //     <p><span className="detailspan">Customer name: </span>{item.name}</p>
                    //     <p><span className="detailspan">Restaurant name: </span>{item.restname}</p>
                    //     <p><span className="detailspan">Restaurant id: </span>{item.restId}</p>
                    //     <p><span className="detailspan">Customer address: </span>{item.address}</p>
                    //     <p><span className="detailspan">No of persons: </span>{item.person}</p>
                    // </div>
                    <div class="panel panel-default">
                        <div class="panel-heading" style={{ fontSize: "19px" }}>Order id: {item.order_id}</div>
                        <div class="panel-body" style={{ padding: "5px 15px" }}>
                            <p><span className="detailspan">Customer name: </span>{item.name}</p>
                            <p><span className="detailspan">Restaurant name: </span>{item.restname}</p>
                            <p><span className="detailspan">Restaurant id: </span>{item.restId}</p>
                            <p><span className="detailspan">Customer address: </span>{item.address}</p>
                            <p><span className="detailspan">No of persons: </span>{item.person}</p>
                            <p><span className="detailspan">Day, Date & Time: </span>{item.date}</p>
                        </div>
                    </div>
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
                {/* <h5 style={{marginBottom: "0px"}}>Newest orders at top</h5> */}
                {this.renderTable(this.state.orders)}
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