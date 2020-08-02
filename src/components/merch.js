import React, { Component } from "react"

class Merch extends Component {
  componentDidMount() {
    window.localStorage.setItem("show_ecwid_logs", "true")
    window.ecwid_script_defer = true
    window.ecwid_dynamic_widgets = true
    window.ec = window.ec || Object()
    window.ec.storefront = window.ec.storefront || Object()
    window.ec.enable_catalog_on_one_page = true

    var script = document.createElement("script")
    script.charset = "utf-8"
    script.type = "text/javascript"
    script.src = "https://app.ecwid.com/script.js?34089289"
    script.defer = true
  }

  render() {
    return (
      <div>
        <div id="my-search-34089289"></div>
        <div id="my-categories-34089289"></div>
        <div id="my-store-34089289"></div>
        <div className="ec-cart-widget"></div>
      </div>
    )
  }
}

export default Merch
