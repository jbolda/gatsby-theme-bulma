import React from "react";
import { Link, graphql } from "gatsby";
import sortBy from "lodash/sortBy";
import HeroLayoutBridge from "../utils/HeroLayoutBridge";
import Img from "gatsby-image";

export const frontmatter = { path: "/" };

class SiteIndex extends React.Component {
  findPhoto(slug) {
    let retPhoto;
    this.props.data.allHero.edges.forEach(edge => {
      if (slug === `/${edge.node.relativeDirectory}/`) {
        retPhoto = (
          <Img
            className="image"
            Tag="figure"
            fluid={edge.node.childImageSharp.fluid}
          />
        );
      }
    });
    if (!retPhoto) {
      this.props.data.allScreenshots.edges.forEach(edge => {
        if (slug === edge.node.slug) {
          retPhoto = (
            <Img
              className="image"
              Tag="figure"
              fluid={
                edge.node.childScreenshot.screenshotFile.childImageSharp.fluid
              }
            />
          );
        }
      });
    }
    return retPhoto;
  }

  render() {
    const { siteMetadata } = this.props.data.site;
    const pageLinks = [];
    let iteratorKey = 0;
    let pageRaw = [
      ...this.props.data.allMarkdownRemark.edges,
      ...this.props.data.allJavascriptFrontmatter.edges
    ];
    let pageArray = [];

    pageRaw.forEach(page => {
      if (typeof page.node.frontmatter === `object`) {
        if (typeof page.node.frontmatter.written != `undefined`) {
          pageArray.push({ ...page.node.frontmatter, ...page.node.fields });
        }
      } else if (typeof page.node.data === `object`) {
        if (
          typeof page.node.data.written != `undefined` &&
          page.node.data.written != ``
        ) {
          pageArray.push({ ...page.node.data, ...page.node.fields });
        }
      } else {
        let restrNode = { ...page.node, ...page.node.description };
        pageArray.push(restrNode);
      }
    });

    const sortedPages = sortBy(
      pageArray,
      page => page.updated || page.written
    ).reverse();
    sortedPages.forEach(page => {
      let frontmatter = page;

      if (frontmatter.layoutType == `post`) {
        iteratorKey += 1;
        pageLinks.push(
          <div className="column is-one-third" key={iteratorKey}>
            <div className="card">
              <div className="card-image">{this.findPhoto(page.slug)}</div>
              <div className="card-content">
                <div className="heading">
                  <div className="level">
                    <h4 className="level-left">
                      <time
                        className="subtitle is-6"
                        dateTime={
                          frontmatter.updatedPretty || frontmatter.writtenPretty
                        }
                      >
                        {frontmatter.updatedPretty || frontmatter.writtenPretty}
                      </time>
                    </h4>
                    <h5 className="tag is-thirdary is-6 level-right">
                      {frontmatter.category}
                    </h5>
                  </div>
                  <h1 className="title">
                    <Link to={frontmatter.path}>{frontmatter.title}</Link>
                  </h1>
                </div>
                <div className="content">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: frontmatter.description
                    }}
                  />
                </div>
                <nav className="level">
                  <div className="level-left">
                    <span className="level-item">
                      <Link to={frontmatter.path}>Read</Link>
                    </span>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        );
      }
    });

    return (
      <HeroLayoutBridge {...this.props}>
        <section className="section is-fifthary edge--top--reverse">
          <h1 className="title">Articles</h1>
          <h2 className="subtitle">Sometimes I write, the most recent</h2>
          <hr />
          <div className="columns is-multiline">{pageLinks}</div>
        </section>
      </HeroLayoutBridge>
    );
  }
}

export default SiteIndex;

export const pageQuery = graphql`
  query allPosts {
    allMarkdownRemark(filter: { frontmatter: { layoutType: { eq: "post" } } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            path
            layoutType
            written
            writtenPretty: written(formatString: "MMMM D, YYYY")
            updated
            updatePretty: updated(formatString: "MMMM D, YYYY")
            category
            description
          }
          timeToRead
        }
      }
    }
    file(relativePath: { eq: "profile.png" }) {
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
    allHero: allFile(
      filter: { sourceInstanceName: { eq: "articles" }, name: { eq: "hero" } }
    ) {
      edges {
        node {
          relativeDirectory
          childImageSharp {
            fluid(
              maxWidth: 600
              maxHeight: 350
              quality: 100
              cropFocus: ATTENTION
            ) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
    about: file(relativePath: { eq: "_about.md" }) {
      childMarkdownRemark {
        html
      }
    }
    placeholder: file(relativePath: { eq: "placeholder.png" }) {
      publicURL
    }
  }
`;

let checkBlank = value => (value ? value : `--`);
let checkBlankTime = value => (value ? `${value}m` : `--`);
