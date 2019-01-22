import React from "react";
import SimpleChrome from "gatsby-theme-bulma-blog/src/components/Simple/SimpleChrome";

const SimpleChromeBridge = props => (
  <SimpleChrome
    post={props.post}
    hero={props.hero}
    location={props.location}
    {...props}
  >
    {props.children}
  </SimpleChrome>
);

export default SimpleChromeBridge
