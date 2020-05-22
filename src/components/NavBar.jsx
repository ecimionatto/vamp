import { Link, Route } from "react-router-dom";
import React from "react";
import Dashboard from "./Dashboard";
import Settings from "./Settings";

const NavBar = () => {
  return (
    <div>
      <ul className="nav">
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
      <Route path="/" exact component={Dashboard} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/settings" component={Settings} />
    </div>
  );
};

export default NavBar;
