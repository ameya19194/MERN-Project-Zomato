import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import DetailsDisplay from './DetailsDisplay';
import Navbar from './Navbar';
import './DetailsDisplay.css';
import Filter from './filters/Filters';

const resturl = "http://localhost:5000/restaurants";

class Details extends React.Component {

    constructor(props) {
        console.log("Details constr");
        super(props);
        this.state = {
            restaurantdata: [],
            restInput: ""
        }
    }

    getFilteredData = (childdata) => {
        sessionStorage.setItem("flag", "false")
        console.log("details got filtered data");
        this.setState({ restaurantdata: childdata });
    }

    render() {
        console.log("Details render");
        //console.log(this.props);
        return (
            /*<li ><Link to="/" onClick={this.deleteAreaId}>Home</Link></li><br />
            In simple details page.<br /><br />
            Area id is {this.state.areaId}.<br />
            Rest search data is {this.props.location.search}.<br />
            Mealtype id is {this.props.match.params.mealtype}.<br />*/
            <div className="container">
                <Navbar />
                <div className="row" >
                    <div className="col-sm-3 filter">
                        <Filter filterCallBack={this.getFilteredData} area={this.props.match.params.area} mealtype={this.props.match.params.mealtype} />
                    </div>
                    <div className="col-sm-9 content">
                        <DetailsDisplay restdata={this.state.restaurantdata} propsarea={this.props.match.params.area} propsmeal={this.props.match.params.mealtype} />
                    </div>
                </div>
            </div>

        );
    }

    componentDidMount() {
        console.log("Details didMount");
        sessionStorage.setItem('mealtype', this.props.match.params.mealtype);
        sessionStorage.setItem('areaId', this.props.match.params.area);
        if(sessionStorage.getItem("pagetofilterflag") === "false"){
            fetch(`${resturl}/${this.props.match.params.area}/${this.props.match.params.mealtype}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.setState({ restaurantdata: data });
            });
        }
        else if(sessionStorage.getItem("pagetofilterflag") === "true"){
            sessionStorage.setItem("pagetofilterflag", "false");
        }  
    }

    componentDidUpdate() {
        console.log("In component did update");
        sessionStorage.setItem('areaId', this.props.match.params.area);
    }

}

export default Details;