import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = (props) => {
  console.log(`IndexPage props`, props);
  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPage {
    site {
      ...SiteInformation
    }
  }
`