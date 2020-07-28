import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-6xl font-bold text-teal-500 mt-8">The Hive</h1>
    <div className="relative m-4 pb-6">
      <p className="absolute top-0 right-0">
        <span className="border-b-4 border-t-4 border-teal-500 text-lg">
          Opening March 2021
        </span>
      </p>
    </div>
    <div className="text-center">
      <h2 className="text-4xl">Different Abilities, Same Opportunties</h2>
      <p className="text-xl">
        We are always looking for community partners and accepting donations to
        help make this mission a possibility for the Willard community.
      </p>
      <button className="bg-orange-300 hover:bg-orange-500 text-white text-4xl font-bold py-2 px-4 rounded">
        Donate Now
      </button>
      <h2 className="text-4xl">Together, we can make a change</h2>
      <p className="text-xl">
        Unemployment rate of Americans with developmental disabilities is close
        to 80%.
      </p>
      <p>See more about our business plan here.</p>
      <button className="bg-orange-300 hover:bg-orange-500 text-white text-2xl font-bold py-2 px-4 rounded">
        <Link to="/contact/">Contact Us</Link>
      </button>
    </div>
  </Layout>
)

export default IndexPage
