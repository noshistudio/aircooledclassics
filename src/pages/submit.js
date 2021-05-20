import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
// import _get from 'lodash/get'
import Check from 'react-feather/dist/icons/check'

import Layout from '../components/Layout'

export default () => (
  <Layout>
    <Helmet>
      <title>Thank you for your submission!</title>
    </Helmet>
    <section className="section thick">
      <div className="container skinny taCenter">
        <p>
          <Check size="5rem" />
        </p>
        <h1>Thank you for your submission!</h1>
        <p>
          We'll try to get back to you as soon as possible!
          <br />
          In the mean time head back <Link to="/">home</Link>.
        </p>
      </div>
    </section>
  </Layout>
)
