import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>The Hive</h1>
    <p>Opening March 2021</p>
    <h2>Different Abilities, Same Opportunties</h2>
    <p>
      We are always looking for community partners and accepting donations to
      help make this mission a possibility for the Willard community.
    </p>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Donate Now
    </button>
    <h2>Together, we can make a change</h2>
    <p>
      Unemployment rate of Americans with developmental disabilities is close to
      80%.
    </p>
    <p>See more about our business plan here.</p>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <Link to="/contact/">Contact Us</Link>
    </button>
  </Layout>
)

export default IndexPage
