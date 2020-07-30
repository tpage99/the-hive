import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SuccessPage = () => (
  <Layout>
    <SEO title="Success" />
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
    <div className="pt-8 md:pt-12 lg:pt-20 leading-tight">
      <h1 className="text-center text-5xl text-bold pb-8">
        Your Form Was Successfully Submitted!
      </h1>
      <p className="text-xl pb-8">
        Thank you for contacting us. Someone will reach out to you shortly.
        Until then, feel free to continue browsing our website by returning to
        the{" "}
        <Link to="/" className="underline">
          Home page
        </Link>{" "}
        or visit our{" "}
        <a
          href="https://www.facebook.com/HiveoftheOzarks/"
          className="underline"
        >
          Facebook page
        </a>
        .
      </p>
    </div>
  </Layout>
)

export default SuccessPage
