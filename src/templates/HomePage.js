import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

import './HomePage.css'

// Export Template for use in CMS preview

export const HomePageTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="Home">
    <Helmet>
      <meta
        name="google-site-verification"
        content="O1R7FJN-DSlN5WjE9s6RBONGX6Twdex8XwMRZFck0AE"
      />
    </Helmet>
    <PageHeader
      className="homepage-header"
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`
