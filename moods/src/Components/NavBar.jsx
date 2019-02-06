import React, { Component } from "react";
class Navbar extends Component {
  constructor() {
    super();
    this.state = {};
  }
  renderNavs() {
    return this.props.navs.map(nav => {
      let isActive = nav.toLowerCase() === this.props.active;
      let style = isActive ? "nav-item active" : "nav-item";

      return (
        <li className={style}>
          <a
            className="nav-link"
            onClick={() => this.props.onClickNav(nav.toLowerCase())}
          >
            {nav}
            {isActive ? <span className="sr-only">(current)</span> : ""}
          </a>
        </li>
      );
    });
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg fixed-top sticky">
        <a class="navbar-brand navbar-logo pt-0 logo" href="#">
          Mood Solutions
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">{this.renderNavs()}</ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;