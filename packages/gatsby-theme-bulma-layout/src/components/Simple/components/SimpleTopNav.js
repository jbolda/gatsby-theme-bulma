import React from "react";
import Link from "gatsby-link";
import styles from "../palette.json";

class SimpleTopNav extends React.Component {
  constructor(props) {
    super(props);
    this.toggleHamburgerMenu = this.toggleHamburgerMenu.bind(this);
    this.state = {
      hamburgerActive: false
    };
  }

  toggleHamburgerMenu() {
    this.setState(prevState => {
      return { hamburgerActive: !prevState.hamburgerActive };
    });
  }

  render() {
    return (
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link
            to="/"
            className="navbar-item"
            style={this.props.location.pathname == '/' ? {backgroundColor: styles.colors.P5} : {}}
            >
            <span
              className="title"
              style={this.props.location.pathname == '/' ? {color: styles.colors.P2} : {color: styles.colors.P5}}
              >
              B
            </span>
          </Link>
          <a
            role="button"
            className={
              this.state.hamburgerActive
                ? 'navbar-burger is-active'
                : 'navbar-burger'
            }
            aria-label="menu"
            aria-expanded={this.state.hamburgerActive ? 'true' : 'false'}
            style={{ color: styles.colors.P5 }}
            onClick={this.toggleHamburgerMenu}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div
          className={
            this.state.hamburgerActive ? 'navbar-menu is-active' : 'navbar-menu'
          }
        >
          <div className="navbar-end">
            <Link
              to="/"
              className="navbar-item"
              style={this.props.location.pathname == '/' ? {backgroundColor: styles.colors.P5, color: styles.colors.P2} : {}}
              >
              Articles
            </Link>
            <Link
              to="/about/"
              className="navbar-item"
              style={this.props.location.pathname == '/about/' ? {backgroundColor: styles.colors.P5, color: styles.colors.P2} : {}}
              >
              About
            </Link>
            <Link
              to="/contact/"
              className="navbar-item"
              style={this.props.location.pathname == '/contact/' ? {backgroundColor: styles.colors.P5, color: styles.colors.P2} : {}}
              >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default SimpleTopNav;
