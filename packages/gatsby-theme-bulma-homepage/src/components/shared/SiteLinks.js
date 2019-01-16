import React from "react";
import PropTypes from "prop-types";
import Envelope from "../../assets/contact-icons/envelope-o.svg";
import Twitter from "../../assets/contact-icons/twitter.svg";
import LinkedIn from "../../assets/contact-icons/linkedin-square.svg";
import Github from "../../assets/contact-icons/github.svg";
import Keybase from "../../assets/contact-icons/key.svg";
import Angellist from "../../assets/contact-icons/angellist.svg";
import Camera from "../../assets/contact-icons/camera.svg";

class SiteLinks extends React.Component {
  render() {
    const { siteMetadata } = this.props.data.site;

    return (
      <aside className="menu">
        <p className="menu-label">Contact Me</p>
        <ul className="menu-list">
          <li>
            <a href={`mailto:` + siteMetadata.siteEmailUrl}>
              <Icon icon={Envelope} alt="email" />{" "}
              {siteMetadata.siteEmailPretty}
            </a>
          </li>
          <li>
            <a href={siteMetadata.siteTwitterUrl}>
              <Icon icon={Twitter} alt="twitter" />{" "}
              {siteMetadata.siteTwitterPretty}
            </a>
          </li>
          <li>
            <a href={siteMetadata.siteLinkedInUrl}>
              <Icon icon={LinkedIn} alt="linkedin" />{" "}
              {siteMetadata.siteLinkedInPretty}
            </a>
          </li>
          <li>
            <a href={siteMetadata.siteGithubUrl}>
              <Icon icon={Github} alt="github" />{" "}
              {siteMetadata.siteGithubPretty}
            </a>
          </li>
          <li>
            <a href={siteMetadata.siteKeybaseUrl}>
              <Icon icon={Keybase} alt="keybase" />{" "}
              {siteMetadata.siteKeybasePretty}
            </a>
          </li>
          <li>
            <a href={siteMetadata.siteAngelListUrl}>
              <Icon icon={Angellist} alt="angellist" />{" "}
              {siteMetadata.siteAngelListPretty}
            </a>
          </li>
          <li>
            <a href={siteMetadata.sitePhotoUrl}>
              <Icon icon={Camera} alt="camera" /> {siteMetadata.sitePhotoPretty}
            </a>
          </li>
        </ul>
      </aside>
    );
  }
}

export default SiteLinks;

SiteLinks.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        siteEmailUrl: PropTypes.string.isRequired,
        siteEmailPretty: PropTypes.string.isRequired,
        siteLinkedInUrl: PropTypes.string.isRequired,
        siteLinkedInPretty: PropTypes.string.isRequired,
        siteTwitterUrl: PropTypes.string.isRequired,
        siteTwitterPretty: PropTypes.string.isRequired,
        siteGithubUrl: PropTypes.string.isRequired,
        siteGithubPretty: PropTypes.string.isRequired,
        siteAngelListUrl: PropTypes.string.isRequired,
        siteAngelListPretty: PropTypes.string.isRequired,
        siteKeybaseUrl: PropTypes.string.isRequired,
        siteKeybasePretty: PropTypes.string.isRequired,
        sitePhotoUrl: PropTypes.string.isRequired,
        sitePhotoPretty: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

const Icon = ({ icon, alt }) => (
  <span className="icon is-small" style={{ marginBottom: `-8px` }}>
    <img src={icon} alt={alt} />
  </span>
);
