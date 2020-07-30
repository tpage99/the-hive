import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `90%`,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer className="bg-gray-800 text-white mt-10 pt-10 pb-2">
        <div
          className="relative"
          style={{
            margin: `0 auto`,
            maxWidth: `90%`,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <p className="absolute bottom-0 left-0">
            ©{new Date().getFullYear()}. Built by
            {` `}
            <a href="https://www.thepagesmedia.com">The Pages Media</a>.
          </p>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
