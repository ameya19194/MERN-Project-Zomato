import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../DetailsDisplay.css';
import { Redirect } from "react-router-dom";

const cuisineurl = "http://localhost:5000/api/cuisine";
const locurl = "http://localhost:5000/api/location";

class Filter extends React.Component {

    constructor(props) {
        console.log("filter constr");
        super(props);
        this.state = {
            cuisinedata: [],
            areadata: [],
            redirect: null,
            redirectArea: "",
            cuisineChecked: sessionStorage.getItem("cuisineflag"),
            priceChecked: sessionStorage.getItem("priceflag"),
            sortChecked: sessionStorage.getItem("sortflag")
        }
    }

    renderAreaFilterBar = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <div className="radio arearadio">
                        <label><input type="radio" name="filterarea" value={item.area}></input>{item.name}</label>
                    </div>
                );
            });
        }
    }

    renderCuisineFilterBar = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <div className="radio">
                        <label><input type="radio" name="cuisine" value={item.cuisine} id={item.name}></input>{item.name}</label>
                    </div>
                );
            });
        }
    }

    filterRestaurants = (event) => {
        console.log("In filter restaurants");
        let a = document.getElementsByName("filterarea");
        let x = document.getElementsByName("cuisine");
        let y = document.getElementsByName("pricerange");
        let z = document.getElementsByName("sortvalue");
        let cuisine = "";
        let lcost = "";
        let hcost = "";
        let sort = "";
        let area = "";

        for (var i = 0; i < a.length; i++) {
            if (a[i].checked) {
                area = (a[i].value);
                console.log("In filter line 62");
            }
        }

        for (var i = 0; i < x.length; i++) {
            if (x[i].checked) {
                cuisine = (x[i].value);
                console.log((x[i].id));
                sessionStorage.setItem("cuisineflag", (x[i].id));
                //this.setState({ cuisineChecked: sessionStorage.getItem("cuisineflag") });
                console.log("In filter line 69");
            }
        }

        for (var i = 0; i < y.length; i++) {
            console.log("In for");
            if (y[i].checked) {
                if (y[i].value == "") {
                    sessionStorage.setItem("priceflag", (y[i].id));
                    //this.setState({ priceChecked: sessionStorage.getItem("priceflag") });
                    console.log("In filter line 77");
                }

                else {
                    let cost = (y[i].value).split(',');
                    lcost = (cost[0]);
                    hcost = (cost[1]);
                    sessionStorage.setItem("priceflag", (y[i].id));
                    //this.setState({ priceChecked: sessionStorage.getItem("priceflag") });
                    console.log("In filter line 84");
                }
            }
        }

        for (var i = 0; i < z.length; i++) {
            if (z[i].checked) {
                sort = (z[i].value);
                console.log("In filter line 92");
                sessionStorage.setItem("sortflag", (z[i].id));
                //this.setState({ sortChecked: sessionStorage.getItem("sortflag") });
            }
        }

        //console.log(cuisine, lcost, hcost, sort);
        if (area == "" || area == null) {
            sessionStorage.setItem("filterappliedflag", "true");
            console.log("In filter line 98");
            let url;
            if (cuisine == "" && lcost == "" && hcost == "" && sort == "") {
                url = `http://localhost:5000/restaurants/${this.props.area}/${this.props.mealtype}`;
            }

            else {
                url = `http://localhost:5000/restaurants/${this.props.area}/${this.props.mealtype}?lcost=${lcost}&hcost=${hcost}&cuisine=${cuisine}&sort=${sort}`;
            }
            sessionStorage.setItem("latestFilterUrl", url);
            fetch(url, { method: 'GET' })
                .then((res) => res.json())
                .then((data) => {
                    this.props.filterCallBack(data);
                });
        }

        else {
            console.log("In filter line 116");
            let newurl;
            if (cuisine == "" && lcost == "" && hcost == "" && sort == "") {
                newurl = `http://localhost:5000/restaurants/${this.props.area}/${this.props.mealtype}?area=${area}`;
            }

            else {
                newurl = `http://localhost:5000/restaurants/${this.props.area}/${this.props.mealtype}?area=${area}&lcost=${lcost}&hcost=${hcost}&cuisine=${cuisine}&sort=${sort}`;
            }
            console.log(newurl);
            sessionStorage.setItem("latestFilterUrl", newurl);
            fetch(newurl, { method: 'GET' })
                .then((res) => res.json())
                .then((data) => {
                    this.props.filterCallBack(data);
                });
            this.setState({ redirectArea: area });
            this.setState({ redirect: true });
        }


    }

    renderChecked = () => {
        console.log("In render checked");
        console.log(sessionStorage.getItem("cuisineflag"));
        if (document.getElementById(sessionStorage.getItem("cuisineflag"))) {
            console.log("In if 1");
            var x = document.getElementById(sessionStorage.getItem("cuisineflag"));
            x.checked = true;
        }

        if (document.getElementById(sessionStorage.getItem("priceflag"))) {
            console.log("In if 2");
            var x = document.getElementById(sessionStorage.getItem("priceflag"));
            x.checked = true;
        }

        if (document.getElementById(sessionStorage.getItem("sortflag"))) {
            console.log("In if 3");
            var x = document.getElementById(sessionStorage.getItem("sortflag"));
            x.checked = true;
        }
    }

    render() {

        if (this.state.redirect) {
            console.log("In render redirect");
            console.log(`restdetails/${this.state.redirectArea}/${this.props.mealtype}`);
            this.setState({ redirect: false });
            sessionStorage.setItem("flag", "true");
            return <Redirect to={`/restdetails/${this.state.redirectArea}/${this.props.mealtype}`} />
        }

        else {
            if (sessionStorage.getItem("pagetofilterflag") === "true" && sessionStorage.getItem("filterappliedflag")==="true") {
                console.log("In filterflag if");
                console.log(sessionStorage.getItem("latestFilterUrl"));
                fetch(sessionStorage.getItem("latestFilterUrl"), { method: 'GET' })
                .then((res) => res.json())
                .then((data) => {
                    this.props.filterCallBack(data);
                });
            }
            console.log("In real render of filter");
            return (
                <React.Fragment>
                    <div class="panel-group" id="accordion">
                        <div class="panel panel-default">
                            <div class="panel-heading filterpaneldiv">
                                <button type="button" className="btn filterbar" data-toggle="collapse" data-target="#a" id="bar">FILTER BY LOCATION</button>
                            </div>
                            <div id="a" className="panel-collapse collapse in" onChange={this.filterRestaurants}>
                                {this.renderAreaFilterBar(this.state.areadata)}
                            </div>
                        </div>

                        <div class="panel panel-default">
                            <div class="panel-heading filterpaneldiv">
                                <button type="button" className="btn filterbar" data-toggle="collapse" data-target="#c" id="bar">FILTER BY CUISINE</button>
                            </div>
                            <div id="c" className="panel-collapse collapse in" onChange={this.filterRestaurants}>
                                <div className="radio">
                                    <label><input type="radio" name="cuisine" value="" id="allcuisine"></input>All</label>
                                </div>
                                {this.renderCuisineFilterBar(this.state.cuisinedata)}
                            </div>
                        </div>

                        <div class="panel panel-default">
                            <div class="panel-heading filterpaneldiv">
                                <button type="button" className="btn filterbar" data-toggle="collapse" data-target="#p" id="bar">FILTER BY PRICE</button>
                            </div>
                            <div id="p" className="collapse collapse in" onChange={this.filterRestaurants} >
                                <div className="radio">
                                    <label><input type="radio" name="pricerange" value="" id="allprices"></input>All prices</label>
                                </div>
                                <div className="radio">
                                    <label><input type="radio" name="pricerange" value="0,500" id="range1"></input>0-500</label>
                                </div>
                                <div className="radio">
                                    <label><input type="radio" name="pricerange" value="500,1000" id="range2"></input>500-1000</label>
                                </div>
                                <div className="radio">
                                    <label><input type="radio" name="pricerange" value="1000,1500" id="range3"></input>1000-1500</label>
                                </div>
                                <div className="radio">
                                    <label><input type="radio" name="pricerange" value="1500,2000" id="range4"></input>1500-2000</label>
                                </div>
                            </div>
                        </div>

                        <div class="panel panel-default">
                            <div class="panel-heading filterpaneldiv">
                                <button type="button" className="btn filterbar" data-toggle="collapse" data-target="#s" id="bar">SORT BY</button>
                            </div>
                            <div id="s" className="collapse collapse in" onChange={this.filterRestaurants} >
                                <div className="radio">
                                    <label><input type="radio" name="sortvalue" value="" id="random"></input>Random Order</label>
                                </div>
                                <div className="radio">
                                    <label><input type="radio" name="sortvalue" value="1" id="ascen"></input>Cost- low to high</label>
                                </div>
                                <div className="radio">
                                    <label><input type="radio" name="sortvalue" value="-1" id="descen"></input>Cost- high to low</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* {this.renderChecked()} */}
                </React.Fragment>
            );
        }

    }

    componentDidMount() {
        console.log("Filter did mount");
        fetch(locurl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ areadata: data });
            });

        fetch(cuisineurl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ cuisinedata: data });
            });
    }

    componentDidUpdate(){
        console.log("In filter did update");
        {this.renderChecked()}
    }
}

export default Filter;