import React from "react"

class PostPublished extends React.Component {
  render() {
    const {frontmatter} = this.props;

    if (frontmatter.updated == null) {
      var published = (
        <div className="date-published">
            <em>{`published ${frontmatter.written}`}</em>
        </div>
      )
    } else {
      var published = (
        <div className="date-published">
            <em>
              {`originally published ${frontmatter.written}
              and updated ${frontmatter.updated}`}
            </em>
        </div>
      )
    }

    return <div className="container content">{published}</div>
  }
}

export default PostPublished
