import React from 'react'
import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'
import Seo from '../components/seo'

const About = ({ data }) => {
  const { name, company } = data.site.siteMetadata.contact
  return (
    <Layout>
      <Seo title="About Us" />
      <h1>About Us</h1>
      <p>Welcome to our residence review website! We are dedicated to providing a platform for students to share their experiences and insights about their residences. Our goal is to help students make informed decisions when choosing their living arrangements.</p>
      <p>Our team is passionate about creating a supportive community where students can connect, share their stories, and find valuable information about different residences. We believe that by sharing our experiences, we can help others make better choices and create a more positive living environment for everyone.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <StaticImage
          src="../images/gatsby-icon.png"
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby blog"
          style={{ marginBottom: `1.45rem` }}
        />
      </div>
      <Link to="/">Return to homepage</Link>
    </Layout>
  )
}

export default About

export const query = graphql`
query {
  site {
    siteMetadata {
    	contact {
      	name 
      	company
      }
    }
  }
}
`