import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import AustinBladeLogo from "../images/austinbladelogo";

const Header = ({ siteTitle }) => {
  //   React.useEffect(() => {
  //     let prevScrollpos = window.pageYOffset

  //     window.onscroll = function () {
  //       let currentScrollPos = window.pageYOffset
  //       if (prevScrollpos > currentScrollPos) {
  //         document.getElementById("navbar").style.top = "0"
  //       } else {
  //         document.getElementById("navbar").style.top = "-75px"
  //       }
  //       prevScrollpos = currentScrollPos
  //     }
  //   }, [])

  return (
    <header>
      <div
        id="navbar"
        style={{
          margin: `0 auto`,
          width: `100%`,
          padding: `1.0rem 1.0875rem`,
          display: `flex`,
          justifyContent: `space-between`,
          backgroundColor: `var(--bg)`,
          boxShadow: `var(--cardShadow)`,
          position: `fixed`,
          top: 0,
          height: 75,
          transition: `top 0.3s`,
        }}
      >
        <Link to="/">
          <AustinBladeLogo width="60px" />
        </Link>

        {/* <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <div className="container">
              <label>
                <input
                  type="checkbox"
                  onChange={e =>
                    toggleTheme(e.target.checked ? "dark" : "light")
                  }
                  checked={theme === "dark"}
                />{" "}
              </label>
            </div>
          )}
                </ThemeToggler> */}
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
