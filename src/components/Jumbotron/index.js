import React from "react";

const Jumbotron = ({ children }) => {
  return (
    <h1
      style={{ textAlign: "center", backgroundColor: "firebrick" }}
      className="jumbotron mx-auto"
    >
     Google Books Search
    </h1>
  );
}

export default Jumbotron;