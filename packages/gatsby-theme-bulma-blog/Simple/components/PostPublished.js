import React from "react";

class PostPublished extends React.Component {
  render() {
    const { frontmatter } = this.props;

    if (frontmatter.updated == null) {
      var published = React.createElement(
        "div",
        { className: "date-published" },
        React.createElement(
          "em",
          null,
          `published ${frontmatter.written}`
        )
      );
    } else {
      var published = React.createElement(
        "div",
        { className: "date-published" },
        React.createElement(
          "em",
          null,
          `originally published ${frontmatter.written}
              and updated ${frontmatter.updated}`
        )
      );
    }

    return React.createElement(
      "div",
      { className: "container content" },
      published
    );
  }
}

export default PostPublished;