import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";

import Layout from "../components/layout";
import PostPreviewCard from "../components/postPreviewCard";
import SEO from "../components/seo";

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
            excerpt={frontmatter.excerpt}
            tags={frontmatter.tags}
          >
            <Img
              style={{ borderRadius: `10px 10px 0px 0px`, margin: `5` }}
              fluid={frontmatter.featuredImage.childImageSharp.fluid}
              alt=""
            />
          </PostPreviewCard>
        </div>
      )
    })}
    {/*<Link to="/tags">Browse by Tag</Link>*/}
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
            date(formatString: "MMMM DD, YYYY")
            excerpt
            tags
            featuredImage {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
