import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { StaticQuery, graphql } from 'gatsby';
import SimpleNav from "gatsby-theme-bulma-layout/src/components/Simple/SimpleNav";
import SiteLinks from "../shared/SiteLinks";

class HeroLayout extends React.Component {
  render() {
    const { about, profile, site } = this.props;
    const { siteMetadata } = site;
  
    return (
      <SimpleNav location={this.props.location}>
        <section className="hero is-small is-secondary edge--bottom">
          <div className="hero-body">
            <div className="columns is-centered is-vcentered">
              <div className="column is-one-third">
                <Img
                  className="image"
                  Tag="figure"
                  fluid={profile.childImageSharp.fluid}
                />
              </div>
              <div className="column">
                <div className="columns is-centered">
                  <div className="column is-half">
                    <h3 className="subtitle">Hi, I am</h3>
                    <h1 className="title">{siteMetadata.siteAuthor}</h1>
                    <h2 className="subtitle">{siteMetadata.siteAuthorIdentity}</h2>
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
                <SiteLinks site={site} />
              </div>
              <div className="column">
                <div
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: about.childMarkdownRemark.html
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


HeroLayout.propTypes = {
  children: PropTypes.array,
  profile: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.object.isRequired
    })
  }).isRequired,
  about: PropTypes.shape({
    childMarkdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default props => (
  <StaticQuery
    query={graphql`
      query GatsbyThemeBulmaHomepageHeroLayout {
        site {
          siteMetadata {
            siteAuthor
            siteAuthorIdentity
            siteLanding
            contactLinks {
              text
              url
              icon
            }
          }
        }
        about: file(relativePath: { eq: "_about.md" }) {
          childMarkdownRemark {
            html
          }
        }
        profile: file(relativePath: { eq: "profile.png" }) {
          childImageSharp {
            fluid(
              maxWidth: 500
              maxHeight: 500
              quality: 90
              duotone: { highlight: "#bdc4bf", shadow: "#192C3B" }
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={queryData => <HeroLayout site={queryData.site} about={queryData.about} profile={queryData.profile} {...props} />}
  />
);
