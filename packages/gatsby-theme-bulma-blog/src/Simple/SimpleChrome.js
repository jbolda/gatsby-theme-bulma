import React from "react";
import SimpleBlogPostLayout from "./SimpleBlogPostLayout";
import HelmetBlock from "./components/HelmetBlock";
import BlogSection from "./components/BlogSection";
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
      <SimpleBlogPostLayout location={this.props.location}>
        <HeroImage hero={this.props.hero} />
        <BlogSection
          props={this.props}
          adjustTitleStyle={adjustTitleStyle}
          adjustPostStyle={adjustPostStyle}
          swatch='secondary'
        />
        <HelmetBlock frontmatter={frontmatter} />
      </SimpleBlogPostLayout>
    );
  }
}

export default SimpleChrome;
