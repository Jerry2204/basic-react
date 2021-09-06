import React, { Component } from "react";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero";
import Profile from "../components/profile";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/profile" className="btn btn-success">
          Ke halaman profile
        </Link>
        <a href="/profile" className="btn btn-warning">
          Ke Halaman Profile
        </a>
        <Hero></Hero>
        <Profile name="Jerry" kelas="43trpl" />
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
