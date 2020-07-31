import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1 className="text-hGreen text-6xl md:text-header lg:text-bigHeader mb-0 pb-0">
      Contact
    </h1>
    <form
      className="bg-hYellow py-2 px-5 md:py-5 md:px-10 mt-0"
      name="contact"
      method="POST"
      action="/success/"
      data-netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <div className="hidden">
        <label>
          Don’t fill this out if you're human:
          <input type="hidden" name="form-name" value="contact" />
        </label>
      </div>
      <div className="bg-mBlue m-2 p-2 md:m-5 md:p-5 text-lg md:text-xl">
        <div>
          <div className="block px-2 md:px-10">
            <label htmlFor="name">Name</label>
          </div>
          <div className="block px-2 md:px-10">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name (required)"
              aria-required="true"
              required
              className="w-full"
            />
          </div>
        </div>
        <div>
          <div className="block px-2 md:px-10 pt-5">
            <label htmlFor="email">Email</label>
          </div>
          <div className="block px-2 md:px-10">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email (required)"
              aria-required="true"
              required
              className="w-full"
            />
          </div>
        </div>
        <div>
          <div className="block px-2 md:px-10 pt-5">
            <label htmlFor="message">Message</label>
          </div>
          <div className="block px-2 md:px-10">
            <textarea
              name="text-field"
              rows="4"
              id="message"
              placeholder="Write your message here..."
              className="w-full"
            />
          </div>
        </div>
        <div className="block px-2 md:px-10 py-5">
          <button
            type="submit"
            aria-label="submit form"
            className="bg-hYellow hover:bg-orange-300 text-white text-xl font-bold py-2 px-4"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
    <div className="text-2xl">
      <Link className="underline">Back to Home</Link>
    </div>
  </Layout>
)

export default ContactPage
