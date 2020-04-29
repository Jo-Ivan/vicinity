import React, { useEffect } from "react";
import Container from "./Container";

const Page = (props) => {
  useEffect(() => {
    document.title = `${props.title} · vicinity`;
    window.scrollTo(0, 0);
  }, []);

  return <Container fluid={props.fluid}>{props.children}</Container>;
};

export default Page;
