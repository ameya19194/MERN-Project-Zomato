import React from 'react';
import ReactDom from 'react-dom';
import './Zomato.css'
import { BrowserRouter, Route, Link } from 'react-router-dom';

const url = "http://localhost:5000/api/mealtype";

class BottomContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mealdata: "",
        };
    }

    renderMealBlocks = (data) => {
        console.log("In render meal block");
        console.log(this.props.dynamicAreaId);
        if (data) {
            return data.map((item) => {
                return (
                        <Link to={`/restdetails/${this.props.dynamicAreaId}/${item.mealtype}`} className="column" >
                            <div className="inner-box-1">
                                <img src={item.imgsrc} alt={item.name} />
                            </div>
                            <div className="inner-box-2">
                                <h2>{item.name[0].toUpperCase() + item.name.slice(1)}</h2>
                                <p>{item.mealdata}</p>
                            </div>
                        </Link>
                );
            });
        }
    }

    render() {
        return (
            <div>
                <div className="bottom-container">

                    <div className="qdiv">
                        <h1>Quick Searches</h1>
                        <h4>Discover restaurants by type of meal</h4>
                    </div>

                    <br />

                    <div className="bottom-flex-container">
                        {this.renderMealBlocks(this.state.mealdata)}
                    </div>

                </div>

            </div>
        );
    }

    componentDidMount() {
        fetch(url, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.setState({ mealdata: data });
            });
    }
}

export default BottomContainer;