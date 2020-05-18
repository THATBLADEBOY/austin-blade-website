import "../components/layout.css";

import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const PostPreviewCard = ({ title, path, date, excerpt, tags, children }) => (
  <>
    <header
      style={{
        marginBottom: `1.45rem`,
      }}
    >
      <div className="previewCard">
        <Link to={path}>{children}</Link>

        <div
          className="previewCardText"
          style={{
            color: `#9b9b9b`,
            marginTop: `33px`,
            marginBottom: `15px`,
            lineHeight: `1.75`,
          }}
        >
          {excerpt}
        </div>
        <div
          className="previewCardText"
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
          }}
        >
          <div className="postTagContainer">
            {tags.map(tag => {
              return <div className="postTag">#{tag}</div>
            })}
          </div>
          <div
            style={{
              marginTop: `20px`,
              marginBottom: `10px`,
              color: `#474747`,
              fontWeight: `300`,
              flexGrow: `1`,
              textAlign: `right`,
            }}
          >
            {date}
          </div>
        </div>
      </div>
    </header>
  </>
)

PostPreviewCard.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  date: PropTypes.string,
  excerpt: PropTypes.string,
  featuredImage: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
}

PostPreviewCard.defaultProps = {
  title: ``,
  path: ``,
  date: ``,
  excerpt: ``,
}

export default PostPreviewCard
