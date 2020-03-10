import React from "react"
import Layout from "../components/layout"
import Tools from "../components/tools"
import WhatWeDo from "../components/what-we-do"
import ContactForm from "../components/contact-form"

const Index = () => {
    return (
        <Layout>
            <WhatWeDo />
            <Tools />
            <ContactForm />
        </Layout>
    )
}

export default Index
