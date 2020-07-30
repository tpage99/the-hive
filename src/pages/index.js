import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-hGreen text-6xl md:text-header lg:text-bigHeader pb-4">
      The Hive
    </h1>
    <div className="relative -m-8 md:-m-12 lg:-m-24 lg:-mr-10">
      <p className="absolute top-0 right-0">
        <span className="border-b-8 border-t-8 border-hGreen text-lg md:text-xl lg:text-2xl">
          Opening March 2021
        </span>
      </p>
    </div>
    <div className="bg-local bg-center bg-contain bgImage  leading-tight">
      <section className="text-center pt-8 md:pt-12 lg:pt-20">
        <h2 className="text-2xl md:text-5xl pt-4">
          Different Abilities, Same Opportunties
        </h2>
        <p className="text-lg px-4 md:px-20 pt-2 pb-4">
          We are always looking for community partners and accepting donations
          to help make this mission a possibility for the Willard community.
        </p>
        <div className="py-3">
          <button className="bg-hYellow hover:bg-orange-300 text-white text-3xl font-bold py-2 px-4">
            Donate Now
          </button>
        </div>
      </section>
      <section className="text-center py-2">
        <h2 className="text-2xl md:text-5xl">Together, we can make a change</h2>
        <p className="text-lg">
          Unemployment rate of Americans with developmental disabilities is
          close to 80%.
        </p>
        <p className="text-lg">See more about our business plan here.</p>
        <div className="py-3">
          <button className="bg-hYellow hover:bg-orange-300 text-white text-xl font-bold py-2 px-4">
            <Link to="/contact/">Contact Us</Link>
          </button>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
