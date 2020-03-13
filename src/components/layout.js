import React from "react"
import Header from "./header"
import SEO from "./SEO"
import Footer from "./footer"
import Banner from "./banner"

const Layout = (props) => {
    return (
        <div>
            <div id="scroll-top" className="fixed w-12 h-12 right-0 bottom-0 mr-8 mb-8 bg-primary-blue rounded-lg opacity-75 hover:opacity-100">
                <a href="#home" className="block w-12 h-12 flex justify-center items-center text-white text-sm">Up</a>
            </div>
            <SEO />
            <Header />
            <Banner />

            {props.children}
            <Footer />
        </div>
    )
}

export default Layout