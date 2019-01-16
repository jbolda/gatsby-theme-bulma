import React from "react";
import PropTypes from "prop-types";
import SimpleBlogPostLayout from "./SimpleBlogPostLayout";
import HelmetBlock from "./components/HelmetBlock";
import PostPublished from "./components/PostPublished";
import Img from "gatsby-image";

class SimpleChrome extends React.Component {
  render() {
    const { frontmatter } = this.props.post;
    const adjustTitleStyle = this.props.hero
      ? {
          color: "white",
          textShadow: [
            "1px 1px 0 #000",
            "-1px -1px 0 #000",
            "1px -1px 0 #000",
            "-1px 1px 0 #000",
            "1px 1px 0 #000"
          ]
        }
      : {};
    const adjustPostStyle = this.props.hero ? { marginTop: "-20%" } : {};

    const HeroImage = props => {
      if (props.hero) {
        return (
          <section className="hero is-medium">
            <div className="container-fluid">
              <Img className="image" fluid={props.hero.childImageSharp.fluid} />
            </div>
          </section>
        );
      } else {
        return null;
      }
    };

    return (
      <SimpleBlogPostLayout
        location={this.props.location}
      >
        <HeroImage hero={this.props.hero} />
        <BlogSection
          props={this.props}
          adjustTitleStyle={adjustTitleStyle}
          adjustPostStyle={adjustPostStyle}
        />
        <HelmetBlock frontmatter={frontmatter} />
      </SimpleBlogPostLayout>
    );
  }
}

export default SimpleChrome;

SimpleChrome.propTypes = {
  post: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  hero: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      fluid: PropTypes.object
    })
  }),
  children: PropTypes.any,
  componentOverride: PropTypes.func,
  componentBlocks: PropTypes.arrayOf(
    PropTypes.shape({
      wrapper: PropTypes.string.isRequired,
      uniqueKey: PropTypes.string.isRequired,
      renderComponent: PropTypes.func.isRequired
    })
  )
};

const BlogSection = ({ props, adjustTitleStyle, adjustPostStyle }) => {
  if (props.componentOverride) {
    return props.componentOverride();
  } else if (props.componentBlocks) {
    return (
      <section
        className="section"
        style={{ paddingBottom: "1rem", ...adjustPostStyle }}
      >
        <ColumnContainer>
          <h1
            className="title is-1"
            style={{
              paddingLeft: 24,
              paddingRight: 40,
              ...adjustTitleStyle
            }}
          >
            {props.post.frontmatter.title}
          </h1>
        </ColumnContainer>
        {props.componentBlocks.map(block => {
          if (block.wrapper === "break-out") {
            return (
              <div key={block.uniqueKey} className="container">
                {block.renderComponent()}
              </div>
            );
          } else {
            return (
              <ColumnContainer key={block.uniqueKey}>
                {block.renderComponent()}
              </ColumnContainer>
            );
          }
        })}
        <ColumnContainer>
          <div className="notification">
            <PostPublished frontmatter={props.post.frontmatter} />
          </div>
        </ColumnContainer>
      </section>
    );
  } else {
    return (
      <section
        className="section"
        style={{ paddingBottom: "1rem", ...adjustPostStyle }}
      >
        <div className="container">
          <ColumnContainer>
            <h1
              className="title is-1"
              style={{
                paddingLeft: 24,
                paddingRight: 40,
                ...adjustTitleStyle
              }}
            >
              {props.post.frontmatter.title}
            </h1>
            <div className="notification">
              {props.children}
              <PostPublished frontmatter={props.post.frontmatter} />
            </div>
          </ColumnContainer>
        </div>
      </section>
    );
  }
};

const ColumnContainer = ({ children }) => (
  <div className="columns is-centered">
    <div className="column is-half">{children}</div>
  </div>
);
