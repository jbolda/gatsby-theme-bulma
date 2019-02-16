import React from "react";
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";

const HeroArticles = props => props.posts.edges.map(post => (
    <div className="column is-one-third" key={post.node.frontmatter.path}>
    <div className="card">
    <div className="card-image">
      <Img
        className="image"
        Tag="figure"
        fluid={post.node.frontmatter.heroImage.childImageSharp.fluid}
      />
    </div>
    <div className="card-content">
        <div className="heading">
        <div className="level">
            <h4 className="level-left">
            <time
                className="subtitle is-6"
                dateTime={
                post.node.frontmatter.updatedPretty || post.node.frontmatter.writtenPretty
                }
            >
                {post.node.frontmatter.updatedPretty || post.node.frontmatter.writtenPretty}
            </time>
            </h4>
            <h5 className="tag is-thirdary is-6 level-right">
            {post.node.frontmatter.category}
            </h5>
        </div>
        <h1 className="title">
            <Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link>
        </h1>
        </div>
        <div className="content">
        <p
            dangerouslySetInnerHTML={{
            __html: post.node.frontmatter.description
            }}
        />
        </div>
        <nav className="level">
        <div className="level-left">
            <span className="level-item">
            <Link to={post.node.frontmatter.path}>Read</Link>
            </span>
        </div>
        </nav>
    </div>
    </div>
  </div>
));

export default props => (
  <StaticQuery
    query={graphql`
      query GatsbyThemeBulmaHomepageHeroArticles {
        posts: allMarkdownRemark(filter: {fields: {sourceInstanceName: {eq: "articles"}}}, limit: 3) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                path
                written
                writtenPretty: written(formatString: "MMMM D, YYYY")
                updated
                updatePretty: updated(formatString: "MMMM D, YYYY")
                category
                description
                heroImage {
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
              timeToRead
            }
          }
        }
      }
    `}
    render={queryData => <HeroArticles posts={queryData.posts} {...props} />}
  />
);