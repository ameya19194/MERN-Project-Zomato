import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import './DetailsDisplay.css';

const mealurl = "http://localhost:5000/api/mealtype";
const locurl = "http://localhost:5000/api/location";

class DetailsDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mealdata: "",
            areadata: "",
        }
    }

    renderRestDiv = (data) => {
        var count = sessionStorage.getItem("count");
        count++;
        sessionStorage.setItem("count", count);
        console.log("count " + count);
        if ((data == null || data == "" || data == []) && count > 2 && (sessionStorage.getItem("flag")==="false")) {
            return (
                <h5 className="head">Sorry, no such restaurant available.</h5>
            );
        }

       else if (data) {
            return data.map((item) => {
                return (
                    <Link className="row tile" to={`/restaurantpage/${item._id}`}>
                        <div className="col-sm-4"><img src={item.thumb} className="tileimg" /></div>
                        <div className="col-sm-8">
                            <h3>{item.name}</h3>
                            <h4 style={{ color: "black" }}>{item.locality}</h4>
                            <p>
                                <span className="detailspan">Category: </span>
                                {item.type.map((x) => {
                                    if (x !== item.type[item.type.length - 1])
                                        return x.name[0].toUpperCase() + x.name.slice(1) + ", ";
                                    else
                                        return x.name[0].toUpperCase() + x.name.slice(1) + ".";
                                })}
                            </p>

                            <p>
                                <span className="detailspan">Cuisines: </span>
                                {item.Cuisine.map((x) => {
                                    if (x !== item.Cuisine[item.Cuisine.length - 1])
                                        return x.name + ", ";
                                    else
                                        return x.name + ".";
                                })}
                            </p>

                            <p><span className="detailspan">Cost: </span>Rs. {item.cost}</p>
                        </div>
                    </Link>
                );
            });
        }

    }

    renderHead = () => {
        if (this.state.areadata && this.state.mealdata) {
            return (
                <h1 className="head">{`${this.renderHeadMeal(this.state.mealdata)} places in ${this.renderHeadArea(this.state.areadata)}`}</h1>
            );
        }
    }

    renderHeadArea = (data) => {
        if (data) {
            var x = data.filter((item) => {
                return item.area == this.props.propsarea;
            });
            return (x[0].name);
        }
    }

    renderHeadMeal = (data) => {
        if (data) {
            var x = data.filter((item) => {
                return item.mealtype == this.props.propsmeal;
            });
            return (x[0].name[0].toUpperCase() + x[0].name.slice(1));
        }
    }

    render() {
        console.log("In details display render");
        var propsrestdata = this.props.restdata;

        if (sessionStorage.getItem("flag")==="true") {
            console.log("In flag if");
            propsrestdata = [];
        }

        console.log(propsrestdata);

        return (
            // <div className="col-sm-9 content">
            //     {this.renderHead()}
            //     <br />
            //     {this.renderRestDiv(this.props.restdata)}
            // </div>
            <React.Fragment>
                {this.renderHead()}
                <br />
                {this.renderRestDiv(propsrestdata)}
            </React.Fragment>
        );
    }

    componentDidMount() {
        console.log("component did mount of details display");
        fetch(mealurl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ mealdata: data });
            });

        fetch(locurl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ areadata: data });
            });
    }
}

export default DetailsDisplay;