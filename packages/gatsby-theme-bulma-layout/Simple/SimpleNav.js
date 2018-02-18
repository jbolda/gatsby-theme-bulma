import React from "react"
import MasterLayout from 'gatsby-theme-bulma/MasterLayout'
import SimpleTopNav from './components/SimpleTopNav'
import heartData from './assets/heart-white.svg'

class SimpleLayout extends React.Component {
  render() {
    let {sitemetadata} = this.props

    return (
      <MasterLayout sitemetadata={sitemetadata} id="SimpleLayout">
        <SimpleTopNav sitemetadata={sitemetadata} location={this.props.location}/>
        {this.props.children}
        <section className="footer">
          <div className="container content has-text-centered">
            <p className="copyright">&copy; All rights reserved.</p>
            <p className="copyright">
              Made with <Heart icon={heartData} alt="heart"/> by{` `}
              <a className="copyright" href={sitemetadata.siteTwitterUrl}>Jacob Bolda</a>
            </p>
          </div>
        </section>
      </MasterLayout>
    )
  }
}

const Heart = ({ icon, alt }) => (
  <img
  src={icon}
  alt={alt}
  style={{
    height: `25px`,
    marginBottom: `-7px`
  }}
  />
)

export default SimpleLayout
