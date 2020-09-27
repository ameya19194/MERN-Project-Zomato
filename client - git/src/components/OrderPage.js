import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';

const orderurl = "http://localhost:5000/placeOrder";

class OrderPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            order_id: Math.floor(Math.random() * 10000),
            name: "",
            phone: "",
            email: "",
            address: "",
            restId: this.props.match.params.id,
            person: "1",
            restname: this.props.match.params.restname,
            orderdata: ""
        }
    }

    generateId = (data) => {
        var flag = true;
        if (data) {
            data.map((item) => {
                if (item.order_id == this.state.order_id) {
                    this.setState({ _id: Math.floor(Math.random() * 10000) });
                    flag = false;
                }
            });
        }

        if (flag) {
            return this.state.order_id;
        }
    }

    setRestName = (data) => {
        return data.replace("%20", " ");
    }

    handleChangeName = (event) => {
        this.setState({ name: event.target.value });
    }

    handleChangePhone = (event) => {
        this.setState({ phone: event.target.value });
    }

    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    handleChangeAddress = (event) => {
        this.setState({ address: event.target.value });
    }

    handleChangePerson = (event) => {
        this.setState({ person: event.target.value });
    }

    handelSubmit = (event) => {

        if(this.state.name=="" || this.state.phone=="" || this.state.email=="" || this.state.address==""){
            event.preventDefault();
            alert("Please fill in all fields");
        }
        else{
            var data = {
                "order_id": this.state.order_id,
                "name": this.state.name,
                "phone": this.state.phone,
                "email": this.state.email,
                "address": this.state.address,
                "restId": this.state.restId,
                "person": this.state.person,
                "restname": this.state.restname,
            }
            fetch(orderurl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then((this.props.history.push('/ordersuccess')));
        }
    }

    handleCancel=()=>{
        this.props.history.push('/');
    }

    render() {
        return (
            <div class="container">
                <Navbar></Navbar>
                <div class="panel panel-primary">
                    <div class="panel-heading"><h3 style={{ marginTop: "10px", fontSize: "20px"}}>Enter Order details</h3></div>
                    <div class="panel-body">
                        <form>
                            <div class="form-group">
                                <label className="control-label">Order Id: </label>
                                <input type="text" class="form-control" value={this.generateId(this.state.orderdata)} name="order_id" readOnly autoComplete="off"></input>
                            </div>

                            <div class="form-group">
                                <label className="control-label">Restaurant Id: </label>
                                <input type="text" class="form-control" value={this.state.restId} name="restId" readOnly autoComplete="off"></input>
                            </div>

                            <div class="form-group">
                                <label className="control-label">Restaurant Name: </label>
                                <input type="text" class="form-control" value={this.setRestName(this.state.restname)} name="restname" readOnly autoComplete="off"></input>
                            </div>

                            <div class="form-group">
                                <label className="control-label">Name: </label>
                                <input type="text" class="form-control" name="name" required value={this.state.name} onChange={this.handleChangeName} autoComplete="off"></input>
                            </div>

                            <div class="form-group">
                                <label className="control-label">Phone: </label>
                                <input type="text" class="form-control" name="phone" required value={this.state.phone} onChange={this.handleChangePhone} autoComplete="off"></input>
                            </div>

                            <div class="form-group">
                                <label className="control-label">Email: </label>
                                <input type="text" class="form-control" name="email" required value={this.state.email} onChange={this.handleChangeEmail} autoComplete="off"></input>
                            </div>

                            <div class="form-group">
                                <label className="control-label">Address: </label>
                                <input type="text" class="form-control" name="address" required value={this.state.address} onChange={this.handleChangeAddress} autoComplete="off"></input>
                            </div>

                            <div class="form-group">
                                <label className="control-label">Total Persons: </label>
                                <select class="form-control" name="person" required value={this.state.person} onChange={this.handleChangePerson}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <br />
                            <div>
                                <button type="submit" class="btn btn-success" onClick={this.handelSubmit}>Confirm Order</button>
                            &nbsp;&nbsp;&nbsp;
                            <button type="button" class="btn btn-danger" onClick={this.handleCancel}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        fetch(`http://localhost:5000/orders`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ orderdata: data });
            });
    }
}

export default OrderPage;