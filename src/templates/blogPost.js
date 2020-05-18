import { graphql, Link } from "gatsby";
import React from "react";

import Layout from "../components/layout";

const Template = ({ data, pageContext }) => {
  const { next, prev } = pageContext
  const { markdownRemark } = data
  const title = markdownRemark.frontmatter.title
  const html = markdownRemark.html
  return (
    <Layout>
      <h1 className="postHeader">{title}</h1>
      <div className="postBody" dangerouslySetInnerHTML={{ __html: html }} />
      {next && <Link to={next.frontmatter.path}>next</Link>}
      {prev && <Link to={prev.frontmatter.path}>prev</Link>}
    </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Template
