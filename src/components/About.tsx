import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();

  setTimeout(() => history.push("/"), 2000);

  return <Fragment>This uses React-Router library!</Fragment>;
};

export default About;
