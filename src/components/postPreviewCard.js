import "../components/layout.css";

import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const PostPreviewCard = ({
  title,
  path,
  date,
  excerpt,
  featuredImage,
  tags,
}) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div className="previewCard">
      <Link
        style={{
          marginTop: `15px`,
          fontWeight: `300`,
        }}
        to={path}
      >
        {title}
      </Link>
      {featuredImage}
      <div
        style={{
          color: `#9b9b9b`,
          marginTop: `33px`,
          marginBottom: `33px`,
          lineHeight: `1.75`,
        }}
      >
        {excerpt}
      </div>
      <div style={{ display: `flex`, justifyContent: `space-between` }}>
        <div style={{ display: `flex` }}>
          {tags.map(tag => {
            return (
              <div
                style={{
                  fontWeight: `300`,
                  marginRight: `5px`,
                }}
              >
                #{tag}
              </div>
            )
          })}
        </div>
        <div
          style={{
            marginBottom: `10px`,
            alignSelf: `flex-end`,
            color: `#d50000`,
            fontWeight: `300`,
          }}
        >
          {date}
        </div>
      </div>
    </div>
  </header>
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
