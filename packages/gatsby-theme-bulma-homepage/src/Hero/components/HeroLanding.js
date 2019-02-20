import React from "react";
import Img from "gatsby-image";
import { StaticQuery, graphql } from "gatsby";

const HeroLanding = ({ profile, site }) => (
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
              <h1 className="title">{site.siteMetadata.siteAuthor}</h1>
              <h2 className="subtitle">
                {site.siteMetadata.siteAuthorIdentity}
              </h2>
              <div className="">
                <p>{site.siteMetadata.siteLanding}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default props => (
  <StaticQuery
    query={graphql`
      query GatsbyThemeBulmaHomepageHeroLanding {
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
    render={queryData => (
      <HeroLanding
        site={queryData.site}
        profile={queryData.profile}
        {...props}
      />
    )}
  />
);
