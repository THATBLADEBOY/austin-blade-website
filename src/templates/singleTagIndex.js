import { Link } from "gatsby";
import React from "react";

import Layout from "../components/layout";

const SingleTagTemplate = ({ data, pageContext }) => {
  const { posts, tagName } = pageContext
  console.log(pageContext)
  return (
    <Layout>
      <div>posts about {`${tagName}`}</div>
      <div>
        <ul>
          {posts.map((post, index) => {
            return (
              <li key={index}>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default SingleTagTemplate
