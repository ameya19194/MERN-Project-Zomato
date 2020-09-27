import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';

class OrderSuccess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <div className="container">
                <Navbar></Navbar>
                <h2 style={{ textAlign: "center"}}>Order successful</h2>
                <div style={{ border: "1px solid #ccc", borderRadius: "6px", padding: "10px"}}>
                    <h3 style={{ textAlign: "center", marginBottom: "20px", fontSize: "16px"}}>Dear customer, thank you for ordering with us. Your order has been placed !</h3>
                    <div style={{ textAlign: "center"}}><Link to={`/orderdisplay`}><button type="button" class="btn" style={{fontSize: "16px", border: "1px solid #ccc"}}>View Orders</button></Link></div>
                </div>
            </div>
        );
    }

    componentDidMount() {

    }
}
export default OrderSuccess;