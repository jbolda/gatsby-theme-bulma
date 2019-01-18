import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import "../css/base.scss";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas, far } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas, far)

class MasterLayout extends React.Component {
  render() {
    let { siteMetadata } = this.props;

    return (
      <div className="MasterLayout is-light">
        <Helmet
          defaultTitle={siteMetadata.siteTitle}
          title={siteMetadata.siteTitle}
          meta={[
            { name: `description`, content: siteMetadata.siteDescription },
            { name: `keywords`, content: `articles` }
          ]}
        >
          <html className="has-navbar-fixed-top" lang="en" />
        </Helmet>
        {this.props.children}
      </div>
    );
  }
}

export default MasterLayout;

MasterLayout.propTypes = {
  siteMetadata: PropTypes.shape({
    siteTitle: PropTypes.string.isRequired,
    siteDescription: PropTypes.string.isRequired
  }).isRequired
};
