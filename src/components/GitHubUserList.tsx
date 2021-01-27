import React from "react";
import { Link, Prompt, Route, useRouteMatch } from "react-router-dom";
import GitHubUser from "./GitHubUser";

function GitHubUserList() {
  const { url, path } = useRouteMatch();

  return (
    <>
      <Link to={`${url}/google`}>google</Link>
      <br />
      <Link to={`${url}/analyndiaz`}>analyndiaz</Link>
      <br />
      <Route path={`${path}/:userId`} component={GitHubUser}></Route>
      <Prompt when={true} message="Are you sure you want to exit?"></Prompt>
    </>
  );
}

export default GitHubUserList;
