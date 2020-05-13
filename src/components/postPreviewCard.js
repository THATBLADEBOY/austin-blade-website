import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const PostPreviewCard = ({ title, path, date }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        maxWidth: 600,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        flexDirection: `column`,
        backgroundColor: `grey`,
      }}
    >
      <Link to={path}>{title}</Link>
      {date}
    </div>
  </header>
)

PostPreviewCard.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  date: PropTypes.string,
}

PostPreviewCard.defaultProps = {
  title: ``,
  path: ``,
  date: ``,
}

export default PostPreviewCard
