import React from "react";
import PropTypes from "prop-types";

class PostPublished extends React.Component {
  render() {
    const { frontmatter } = this.props;

    if (frontmatter.updatedPretty == null) {
      var published = (
        <div className="date-published">
          <em>{`published ${frontmatter.writtenPretty}`}</em>
        </div>
      );
    } else {
      var published = (
        <div className="date-published">
          <em>
            {`originally published ${frontmatter.writtenPretty}
              and updated ${frontmatter.updatedPretty}`}
          </em>
        </div>
      );
    }

    return <div className="container content">{published}</div>;
  }
}

export default PostPublished;

PostPublished.propTypes = {
  frontmatter: PropTypes.shape({
    writtenPretty: PropTypes.string.isRequired,
    updatedPretty: PropTypes.string
  }).isRequired
};
