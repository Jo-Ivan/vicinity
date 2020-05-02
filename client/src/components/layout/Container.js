import React from "react";

const Container = (props) => {
  return <div className={"container vicinity-container " + (props.fluid && "is-fluid")}>{props.children}</div>;
};

export default Container;
