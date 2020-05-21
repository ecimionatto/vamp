import { Link, Route } from "react-router-dom";
import React from "react";
import Dashboard from "./Dashboard";
import Settings from "./Settings";

const NavBar = () => {
  return (
    <div className="card">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/settings">
              Settings
            </Link>
          </li>
        </ul>
      </div>
      <Route path="/" exact component={Dashboard}/>
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/settings" component={Settings} />
    </div>
  );
};

export default NavBar;
