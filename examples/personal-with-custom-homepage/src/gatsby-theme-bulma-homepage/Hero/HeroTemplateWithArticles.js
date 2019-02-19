import React from "react";
import HeroTemplate from "gatsby-theme-bulma-homepage/src/Hero/HeroTemplateWithArticles.js";

class SiteIndex extends React.Component {
  render() {
    return (
      <HeroTemplate {...this.props}>
        <section className="section is-fourthary edge--top">
          <h1 className="title">
            Recipess
          </h1>
          <h2 className="subtitle">
            We enjoy cooking. These are a few of our favorites eaten recently.
          </h2>
          <hr />
          <div className="columns is-multiline">
            [Insert list of recipes here]
          </div>
        </section>
      </HeroTemplate>
    );
  }
}

export default SiteIndex;
