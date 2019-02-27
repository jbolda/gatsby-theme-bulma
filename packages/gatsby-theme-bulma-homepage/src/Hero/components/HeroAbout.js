import React from "react";
import { StaticQuery, graphql } from "gatsby";
import SiteLinks from "../../shared/SiteLinks";

const HeroAbout = ({ site, about }) => (
  <section className="hero is-secondary is-medium">
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
);

export default props => (
  <StaticQuery
    query={graphql`
      query GatsbyThemeBulmaHomepageHeroAbout {
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
      }
    `}
    render={queryData => (
      <HeroAbout site={queryData.site} about={queryData.about} {...props} />
    )}
  />
);
