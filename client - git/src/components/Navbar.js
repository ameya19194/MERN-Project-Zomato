import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Navbar extends React.Component {

    deleteAreaId = () => {
        sessionStorage.removeItem('areaId');
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-inverse">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <div class="navbar-brand">Edumato</div>
                        </div>
                        <ul class="nav navbar-nav">
                            <li><Link to="/" onClick={this.deleteAreaId}>Home</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;