import React from "react";

const Container = props => {
  return <div className={`container${props.fluid ? "-fluid" : ""}`} style={{  }}>{props.children}</div>;
}

export default Container;