import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import "./layout.scss"
import CookieConsent from "react-cookie-consent"

import ReactGA from "react-ga4"
ReactGA.initialize("G-JJLVP1J4JV")

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container-fluid p-0">
      <CookieConsent>
        Our website uses cookies to analyze how the site is used and to ensure
        your experience is consistent between visits.
      </CookieConsent>
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
