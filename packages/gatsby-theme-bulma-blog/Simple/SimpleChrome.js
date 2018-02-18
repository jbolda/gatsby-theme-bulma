import _extends from "babel-runtime/helpers/extends";
import React from "react";
import SimpleBlogPostLayout from './SimpleBlogPostLayout';
import HelmetBlock from "./components/HelmetBlock";
import PostPublished from "./components/PostPublished";
import Img from 'gatsby-image';

class SimpleChrome extends React.Component {
  render() {
    const { frontmatter } = this.props.post;
    const HeroImage = props => {
      if (props.hero) {
        return React.createElement(
          "section",
          { className: "hero is-medium" },
          React.createElement(
            "div",
            { className: "container-fluid" },
            React.createElement(Img, { className: "image", sizes: props.hero.childImageSharp.sizes })
          )
        );
      } else {
        return React.createElement("div", null);
      }
    };

    const adjustTitleStyle = this.props.hero ? {
      color: "white",
      textShadow: ["1px 1px 0 #000", "-1px -1px 0 #000", "1px -1px 0 #000", "-1px 1px 0 #000", "1px 1px 0 #000"]
    } : {};
    const adjustPostStyle = this.props.hero ? { marginTop: "-30%" } : {};

    return React.createElement(
      SimpleBlogPostLayout,
      { sitemetadata: this.props.sitemetadata, location: this.props.location },
      React.createElement(HeroImage, { hero: this.props.hero }),
      React.createElement(
        "section",
        { className: "section", style: _extends({ paddingBottom: "1rem" }, adjustPostStyle) },
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "h1",
            { className: "title is-1 is-hidden-mobile", style: _extends({ fontSize: "5rem" }, adjustTitleStyle) },
            frontmatter.title
          ),
          React.createElement(
            "h1",
            { className: "title is-hidden-tablet", style: _extends({ fontSize: "2rem" }, adjustTitleStyle) },
            frontmatter.title
          )
        )
      ),
      React.createElement(
        "section",
        { className: "section", style: { paddingTop: "0px" } },
        React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "div",
            { className: "box" },
            this.props.children,
            React.createElement(PostPublished, { frontmatter: frontmatter })
          )
        )
      ),
      React.createElement(HelmetBlock, { frontmatter: frontmatter })
    );
  }
}

export default SimpleChrome;

export const blogPostFragment = graphql`
  fragment MarkdownBlogPost_frontmatter on MarkdownRemark {
    frontmatter {
      title
      path
      layoutType
      written(formatString: "MMMM Do YYYY")
      updated(formatString: "MMMM Do YYYY")
      category
      description
    }
  }
`;