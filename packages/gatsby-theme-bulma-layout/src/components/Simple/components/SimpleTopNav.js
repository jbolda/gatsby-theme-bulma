import React from "react";
import { Link } from "gatsby";
import palette from '../../../../../../.cache/gatsby-theme-bulma-core/palette.js'

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
            style={this.props.location.pathname === '/' ?
              {backgroundColor: palette.colors.P5}
              : this.props.logo.inverse ? {} : {backgroundColor: palette.colors.P5}
            }
            >
            <span
              className="title"
              style={this.props.location.pathname === '/' ? {color: palette.colors.P2} : {color: palette.colors.P5}}
              >
              {this.props.logo ? 
                  <Logo
                  icon={!!this.props.logo.inverse && this.props.location.pathname !== '/' ? 
                  this.props.logo.inverse
                  : this.props.logo.data}
                  alt={this.props.logo.alt}
                />
                : this.props.siteMetadata.siteTitle}
            </span>
          </Link>
          {!this.props.siteMetadata.navLinks ? null : (
            <a
              role="button"
              className={
                this.state.hamburgerActive
                  ? 'navbar-burger is-active'
                  : 'navbar-burger'
              }
              aria-label="menu"
              aria-expanded={this.state.hamburgerActive ? 'true' : 'false'}
              style={{ color: palette.colors.P5 }}
              onClick={this.toggleHamburgerMenu}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          )}
        </div>
        {!this.props.siteMetadata.navLinks ? null : (
          <div
            className={
              this.state.hamburgerActive ? 'navbar-menu is-active' : 'navbar-menu'
            }
          >
            <div className="navbar-end">
              {this.props.siteMetadata.navLinks.map(link => (
                <Link
                key={link.text}
                to={link.url}
                className="navbar-item"
                style={this.props.location.pathname === link.url ? {backgroundColor: palette.colors.P5, color: palette.colors.P2} : {}}
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    )
  }
}

export default SimpleTopNav;

const Logo = ({ icon, alt }) => (
  <img
    src={icon}
    alt={alt}
    style={{
      height: `50px`,
      maxHeight: `50px`,
      marginBottom: `0px`
    }}
  />
);
