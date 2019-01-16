import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import SimpleNav from "gatsby-theme-bulma-layout/src/components/Simple/SimpleNav";
import SiteLinks from "../shared/SiteLinks";

class HeroLayout extends React.Component {
  render() {
    const { siteMetadata } = this.props.data.site;

    return (
      <SimpleNav site={this.props.data.site} {...this.props}>
        <section className="hero is-small is-secondary edge--bottom">
          <div className="hero-body">
            <div className="columns is-centered is-vcentered">
              <div className="column is-one-third">
                <Img
                  className="image"
                  Tag="figure"
                  fluid={this.props.data.file.childImageSharp.fluid}
                />
              </div>
              <div className="column">
                <div className="columns is-centered">
                  <div className="column is-half">
                    <h3 className="subtitle">Hi, I am</h3>
                    <h1 className="title">{siteMetadata.siteAuthor}</h1>
                    <h2 className="subtitle">{siteMetadata.siteAuthorIndentity}</h2>
                    <div className="">
                      <p>{siteMetadata.siteLanding}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="columns">
              <div className="column is-one-quarter">
                <SiteLinks {...this.props} />
              </div>
              <div className="column">
                <div
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.about.childMarkdownRemark.html
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        {this.props.children}
      </SimpleNav>
    );
  }
}

export default HeroLayout;

HeroLayout.propTypes = {
  children: PropTypes.array.isRequired,
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired
      })
    }).isRequired,
    about: PropTypes.shape({
      childMarkdownRemark: PropTypes.shape({
        html: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};
