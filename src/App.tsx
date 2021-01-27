import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import GitHubUser from "./components/GitHubUser";
import { Link, NavLink, Redirect, Route, Switch } from "react-router-dom";
import AboutCopy from "./components/AboutCopy";
import GitHubUserList from "./components/GitHubUserList";
import PageNotFound from "./components/PageNotFound";

function App() {
  // function getPage() {
  //   const path = window.location.pathname;
  //   if (path === "/github") return <GitHubUser />;
  //   if (path === "/about") return <About />;
  //   return <Home />;
  // }
  return (
    <div className="App">
      <Header>
        <ul className="header">
          {/* <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/github">GitHub Profile</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li> */}
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/githubUsers" activeClassName="active">
              GitHub User List
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/github" activeClassName="active">
              GitHub Profile
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
        </ul>
      </Header>
      {/* <section className="content">{getPage()}</section> */}
      <section className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about" component={About}></Route>
          <Route path="/githubUsers" component={GitHubUserList}></Route>
          <Redirect from="/about-page" to="/about"></Redirect>
          <Route exact path="*" component={PageNotFound}></Route>
        </Switch>
      </section>
    </div>
  );
}

export default App;
