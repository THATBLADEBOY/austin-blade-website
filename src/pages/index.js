import { graphql, Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import PostPreviewCard from "../components/postPreviewCard"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {data.allMarkdownRemark.edges.map(edge => {
      const { frontmatter } = edge.node
      return (
        <div key={frontmatter.path}>
          <PostPreviewCard
            title={frontmatter.title}
            path={frontmatter.path}
            date={frontmatter.date}
          />

          {/* <Link to={frontmatter.path}>
            {frontmatter.title + frontmatter.date}
          </Link> */}
        </div>
      )
    })}
    <Link to="/tags">Browse by Tag</Link>
  </Layout>
)

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`

export default IndexPage
