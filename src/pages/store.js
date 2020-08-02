import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import GetMerch from "../components/getMerch"

const StorePage = () => (
  <Layout>
    <SEO title="Store" />
    <h1 className="text-hGreen text-6xl md:text-header lg:text-bigHeader pb-4">
      Merch
    </h1>
    <section className="w-full">
      <GetMerch />
    </section>
    <div className="text-2xl">
      <Link className="underline" to="/">
        Back to Home
      </Link>
    </div>
  </Layout>
)

export default StorePage
