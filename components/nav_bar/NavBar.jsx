// NavBar.js
import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
// import Dashboard from './Dashboard';
// import Products from './Products';
// import Accounts from './Accounts';
import './NavBar.css'; // Import your CSS file for styling

const NavBar = () => {
return (
    <Router>
    <nav>
        <div className="logo">
        <span>PRODUCT ADMIN</span>
        </div>
        <div className="nav-items">
        <NavLink to="/dashboard" activeClassName="active-link">
            <FontAwesomeIcon icon={faTachometerAlt} />
            <span>Dashboard</span>
        </NavLink>
        <NavLink to="/products" activeClassName="active-link">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>Products</span>
        </NavLink>
        <NavLink to="/accounts" activeClassName="active-link">
            <FontAwesomeIcon icon={faUser} />
            <span>Accounts</span>
        </NavLink>
        </div>
        <Switch>
        {/* <Route path="/dashboard" component={Dashboard} />
        <Route path="/products" component={Products} />
        <Route path="/accounts" component={Accounts} /> */}
        </Switch>
    </nav>
    </Router>
);
};

export default NavBar;
