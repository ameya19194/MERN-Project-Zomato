import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './RestaurantPageNew.css';

const resturl = "http://localhost:5000/restaurants";

class RestaurantPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurantpagedata: [],
        }
    }

    renderRest = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <React.Fragment>
                        <div>
                            <img src={item.thumb} className="headimg" />
                        </div>
                        <div className="contentDiv">
                            <h1 className="titlehotel">{item.name}</h1>
                            <Tabs>
                                <TabList>
                                    <Tab><h4 className="tabs">Overview</h4></Tab>
                                    <Tab><h4 className="tabs">Contact</h4></Tab>
                                </TabList>
                                <br></br>
                                <TabPanel className="tabpanel">
                                    <h4 className="h4content"><span className="span">Location: </span>{item.locality}</h4>
                                    <h4 className="h4content"><span className="span">Cuisines: </span>
                                        {item.Cuisine.map((x) => {
                                            if (x !== item.Cuisine[item.Cuisine.length - 1])
                                                return x.name + ", ";
                                            else
                                                return x.name + ".";
                                        })}
                                    </h4>
                                    <h4 className="h4content"><span className="span">Mealtypes: </span>
                                        {item.type.map((x) => {
                                            if (x !== item.type[item.type.length - 1])
                                                return x.name[0].toUpperCase() + x.name.slice(1) + ", ";
                                            else
                                                return x.name[0].toUpperCase() + x.name.slice(1) + ".";
                                        })}
                                    </h4>
                                    <h4 className="h4content">
                                        <span className="span">Cost for two people: </span>
                                        Approx Rs. {item.cost}
                                    </h4>
                                </TabPanel>
                                <TabPanel className="tabpanel">
                                    <h4 className="h4content"><span className="span">Contact: </span>{item.contact}</h4>
                                    <h4 className="h4content"><span className="span">Address: </span>{item.address}</h4>
                                </TabPanel>
                            </Tabs>
                        </div>
                        <button type="button" class="btn back" onClick={this.back}>Back</button>
                        <Link to={`/orderpage/${this.props.match.params.id}/${item.name}`}><button type="button" class="btn btn-success order">Place Order</button></Link>
                    </React.Fragment>
                );
            });
        }
    }

    back = () => {
        // console.log(`/restdetails/${sessionStorage.getItem('areaId')}/${sessionStorage.getItem('mealtype')}`);
        // this.props.history.push(`/restdetails/${sessionStorage.getItem('areaId')}/${sessionStorage.getItem('mealtype')}`);
        if (sessionStorage.getItem("filterappliedflag") === "true") {
            sessionStorage.setItem("pagetofilterflag", "true");
        }
        this.props.history.goBack();
    }

    render() {
        console.log('In rest render');
        console.log(this.props);
        return (
            <div class="container">
                <Navbar />
                {this.renderRest(this.state.restaurantpagedata)}
            </div>
        );
    }

    componentDidMount() {
        console.log('In rest didmount');
        console.log(`${resturl}?area=${sessionStorage.getItem('areaId')}&id=${this.props.match.params.id}`);
        fetch(`${resturl}?area=${sessionStorage.getItem('areaId')}&id=${this.props.match.params.id}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.setState({ restaurantpagedata: data });
            });
    }
}

export default RestaurantPage;