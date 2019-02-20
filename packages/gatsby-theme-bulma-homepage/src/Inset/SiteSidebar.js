import React from "react";
import { Link } from "gatsby";
import SiteLinks from "../shared-components/SiteLinks";
import Img from "gatsby-image";

class SiteSidebar extends React.Component {
  render() {
    const isHome = this.props.location.pathname === "/";
    const { siteMetadata } = this.props.data.site;

    return (
      <div className="">
        <div className="box is-fullwidth" style={{ padding: `0px` }}>
          <Link to={`/`}>
            <figure className="image">
              <Img
                className="image"
                fluid={this.props.data.file.childImageSharp.fluid}
              />
            </figure>
          </Link>
          <div className="card-content">
            <p className="title">
              <Link
                style={{
                  textDecoration: `none`,
                  borderBottom: `none`,
                  color: `inherit`
                }}
                to={`/`}
              >
                {siteMetadata.siteTitle}
              </Link>
            </p>
            <p style={{ fontStyle: `italic` }}>
              {siteMetadata.siteDescription}
            </p>
          </div>
        </div>
        <div className="is-hidden-mobile">
          <SiteLinks {...this.props} />
        </div>
      </div>
    );
  }
}

export default SiteSidebar;
