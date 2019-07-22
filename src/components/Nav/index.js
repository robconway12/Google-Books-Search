import React from "react";

const Nav = props => (
  <div>
    <nav
      className="navbar fixed-top bg-secondary justify-content-center"
      style={{
        marginBottom: "40px",
        height: "50px"
      }}
    >
      <ul className="nav navbar-nav">
        <li>
          <a
            href="/"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "20px",
              padding: "50px"
            }}
          >
            Search
          </a>
          <a
            href="/savedbooks"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "20px",
              padding: "50px"
            }}
          >
            Saved Books
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Nav;
