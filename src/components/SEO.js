import React from "react"
import Helmet from "react-helmet"

const SEO = () => {
    return (
        <div>
            <Helmet>
                {/* <!-- Primary Meta Tags --> */}
                <title>Pure Codes | We build exceptional web applications using PHP, Laravel + VueJS</title>
                <meta name="title" content="Pure Codes | We build exceptional web applications using PHP, Laravel + VueJS" />
                <meta name="description" content="Pure Codes is a software development consultancy that specializes in PHP, Laravel, Vue.js and Tailwindcss" />

                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://purecodes.net/" />
                <meta property="og:title" content="Pure Codes | We build exceptional web applications using PHP, Laravel + VueJS" />
                <meta property="og:description" content="Pure Codes is a software development consultancy that specializes in PHP, Laravel, Vue.js and Tailwindcss" />

                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://purecodes.net/" />
                <meta property="twitter:title" content="Pure Codes | We build exceptional web applications using PHP, Laravel + VueJS" />
                <meta property="twitter:description" content="Pure Codes is a software development consultancy that specializes in PHP, Laravel, Vue.js and Tailwindcss" />
            </Helmet>
        </div>
    )
}

export default SEO