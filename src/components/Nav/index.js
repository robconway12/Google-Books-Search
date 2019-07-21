import React from "react";

const Nav = props => (
  <div>
    <nav className="navbar fixed-top bg-secondary" style={{ marginBottom: "40px", backgroundColor: "forestgreen", height: "50px" }}>
      <ul className="nav navbar-nav navbar-left">
        <li>
          <a href="/" style={{ color: "white", textDecoration: "none", fontSize: "20px", padding: "50px" }}>
            Search
          </a>
          <a href="/savedbooks" style={{ color: "white", textDecoration: "none", fontSize: "20px", padding: "50px" }}>
            Your Saved Books
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Nav;