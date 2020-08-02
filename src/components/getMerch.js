import React, { Component } from "react"
import { Helmet } from "react-helmet"

class GetMerch extends Component {
  componentDidMount() {
    window.localStorage.setItem("show_ecwid_logs", "true")
    window.ecwid_script_defer = true
    window.ecwid_dynamic_widgets = true
    window.ec = window.ec || Object()
    window.ec.storefront = window.ec.storefront || Object()
    window.ec.enable_catalog_on_one_page = true
  }
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <script src="https://app.ecwid.com/script.js?34089289&data_platform=code&data_date=2020-08-02" />
        </Helmet>
        <div className="w-full">
          <div id="my-store-34089289"></div>
          <div>
            <script type="text/javascript">
              xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60)
              table(60)","categoryView=grid","searchView=list","id=my-store-34089289");
            </script>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default GetMerch
