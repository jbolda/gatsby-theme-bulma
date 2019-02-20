import React from "react";
import HeroLayout from "./components/HeroLayout.js";
import HeroArticles from './components/HeroArticles.js'

const HeroTemplate = props => (
  <HeroLayout {...props}>
    <section className="section is-fourthary edge--top">
      <h1 className="title">Articles</h1>
      <h2 className="subtitle">The Most Recent</h2>
      <hr />
      <div className="columns is-multiline">
        <HeroArticles />
      </div>
    </section>
    {props.children}
  </HeroLayout>
);

export default HeroTemplate
