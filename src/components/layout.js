/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import "./layout.css";
import "typeface-roboto";
import "typeface-roboto-mono";

import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

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
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `8rem 1.0875rem 1.45rem`,
          backgroundColor: "var(--bg)",
        }}
      >
        <h2 style={{ color: `white` }}>
          Thanks for checking out the site. It's under construction. 🚧 If you
          need to contact me,{" "}
          <a name="mailTo" href="mailto:hello@austinblade.com">
            shoot me an email
          </a>
          .
        </h2>
        {/* <main>{children}</main> */}
        <footer className="footer">
          © {new Date().getFullYear()}, Built with ❤ by
          {` `}
          <a name="twitter" href="https://www.twitter.com/_austinblade">
            Austin Blade
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
