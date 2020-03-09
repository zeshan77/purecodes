import React from "react"
import Header from "./header"
import SEO from "./SEO"
import Footer from "./footer"
import Banner from "./banner"

const Layout = (props) => {
    return (
        <div>
            <SEO />
            <Header />
            <Banner />

            {props.children}
            <Footer />
        </div>
    )
}

export default Layout