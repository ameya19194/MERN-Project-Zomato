import React from 'react';
import ReactDom from 'react-dom';
import './Zomato.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import BottomContainer from './BottomContainer';

const url = "http://localhost:5000/api/location";
const resturl = "http://localhost:5000/restaurants?area=";


class TopContainer extends React.Component {

    constructor(props) {
        console.log('constructor top');
        super(props);
        this.state = {
            areaId: "1",
            areadata: "",
            restaurantsdata: "",
            restid: ""
        };
        sessionStorage.setItem("count", 0);
        sessionStorage.setItem("flag", "false");
        sessionStorage.setItem("cuisineflag", "allcuisine");
        sessionStorage.setItem("priceflag", "allprices");
        sessionStorage.setItem("sortflag", "random");
        sessionStorage.setItem("pagetofilterflag", "false");
        sessionStorage.setItem("filterappliedflag", "false");
    }

    renderArea = (data) => {

        if (data) {
            return data.map((item) => {
                return (
                    <option value={item.area}>
                        {item.name}
                    </option>
                );
            });
        }
    }

    handleAreaRenderRestaurants = (event) => {
        var x = document.getElementById("restaurant");
        x.value = "";
        console.log("in handle area");
        sessionStorage.setItem('areaId', event.target.value);
        this.setState({ areaId: sessionStorage.getItem('areaId') });
        fetch(`${resturl}${event.target.value}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                //console.log(data);
                this.setState({ restaurantsdata: data });
            });
    }

    renderRestaurants = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option>
                        {item.name}|{item.city_name}
                    </option>
                );
            });
        }
    }

    getRestId = (event) => {
        var data = this.state.restaurantsdata;
        var x = (document.getElementById("restaurant").value);
        console.log(x.split('|')[0]);
        if (!(x == "")) {
            var flag = false;
            var y;
            for (y of data) {
                if (y.name == x.split('|')[0]) {
                    flag = true;
                }
            }

            if (flag) {
                console.log("In if if");
                let rest = data.find((item) => item.name == x.split('|')[0]);
                console.log(rest._id);
                this.setState({ restid: rest._id });
            }
        }
    }

    validateArea = (event) => {
        var value = (document.getElementById("local").value);
        if (value == "" || value == null) {
            event.preventDefault();
            var x = document.getElementById("local");
            var originalBorder = x.style["border"];
            var originalBoxShadow = x.style["box-shadow"];
            x.style["border"] = "1px solid red";
            x.style["box-shadow"] = "inset 0 0 5px red";
            setTimeout(function () {
                x.style["border"] = originalBorder;
                x.style["box-shadow"] = originalBoxShadow;
            }, 1000);
        }
    }

    validateAreaAndInput = (event) => {
        var value = (document.getElementById("local").value);
        var restvalue = (document.getElementById("restaurant").value);
        if (value == "" || value == null) {
            event.preventDefault();
            var x = document.getElementById("local");
            var originalBorder = x.style["border"];
            var originalBoxShadow = x.style["box-shadow"];
            x.style["border"] = "1px solid red";
            x.style["box-shadow"] = "inset 0 0 5px red";
            setTimeout(function () {
                x.style["border"] = originalBorder;
                x.style["box-shadow"] = originalBoxShadow;
            }, 1000);
        }

        else if ((value !== "" || value !== null) && (restvalue == "" || restvalue == null)) {
            event.preventDefault();
            var x = document.getElementById("restaurant");
            var originalBorder = x.style["border"];
            var originalBoxShadow = x.style["box-shadow"];
            x.style["border"] = "1px solid red";
            x.style["box-shadow"] = "inset 0 0 5px red";
            setTimeout(function () {
                x.style["border"] = originalBorder;
                x.style["box-shadow"] = originalBoxShadow;
            }, 1000);
        }

        else if ((value !== "" || value !== null) && (restvalue !== "" || restvalue !== null)) {
            var data = this.state.restaurantsdata;
            var x = (document.getElementById("restaurant").value);
            var flag = false;
            var y;
            for (y of data) {
                if (y.name == x.split('|')[0]) {
                    flag = true;
                }
            }

            if (flag == false) {
                event.preventDefault();
                var x = document.getElementById("restaurant");
                var originalBorder = x.style["border"];
                var originalBoxShadow = x.style["box-shadow"];
                x.style["border"] = "1px solid red";
                x.style["box-shadow"] = "inset 0 0 5px red";
                alert('select a restaurant from listed options.');
                setTimeout(function () {
                    x.style["border"] = originalBorder;
                    x.style["box-shadow"] = originalBoxShadow;
                }, 1000);
            }
        }
    }

    render() {
        console.log("In top container render");
        return (
            <div>
                <div className="homenav">
                    <nav class="navbar navbar-inverse">
                        <div class="container-fluid">
                            <div class="navbar-header">
                                <div class="navbar-brand">Edumato</div>
                            </div>
                            <ul class="nav navbar-nav">
                                <li><Link to="/orderdisplay">Orders</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="top-flex-container">
                    <div className="logo">e!</div>
                    <div className="finddesc">
                        <h1>Find the best restaurants, cafes and bars</h1>
                    </div>
                    <div className="searchbars">
                        <div className="search-1">
                            <select type="text" list="locality" name="area" id="local" onChange={this.handleAreaRenderRestaurants}>
                                <option value="" disabled selected hidden>Select Location</option>
                                {this.renderArea(this.state.areadata)}
                            </select>
                        </div>
                        {/* <datalist id="locality">
                            {this.renderArea(this.state.area)}
                        </datalist> */}

                        <div className="search-2">
                            <input type="text" list="restaurants" name="id" id="restaurant" onChange={this.getRestId} autoComplete="off" onClick={this.validateArea}></input>
                            <Link to={`/restaurantpage/${this.state.restid}`} onClick={this.validateAreaAndInput} id="blink"><button className="sbutton"><span className="fa fa-search searchspan"></span></button></Link>
                        </div>
                        <datalist id="restaurants">
                            {this.renderRestaurants(this.state.restaurantsdata)}
                        </datalist>
                    </div>
                </div>
                <BottomContainer dynamicAreaId={this.state.areaId} />
            </div>

        );
    }

    componentDidMount() {
        console.log("In componentDidMount");
        fetch(url, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.setState({ areadata: data });
            });
    }
}



export default TopContainer;