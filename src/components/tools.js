import React from "react"
import Laravel from "../styles/images/laravel.svg"
import VueJS from "../styles/images/vuejs.svg"
import GatsbyJS from "../styles/images/gatsbyjs.svg"
import Docker from "../styles/images/docker.svg"
import Tailwindcss from "../styles/images/tailwindcss.svg"
import More from "../styles/images/more.svg"
import Styles from "./tools.module.css"

const Tools = () => {
    return (
        <div id="tools">
            <div className="bg-gray-400 py-16">
                <div className="container mx-auto px-10 md:px-0">
                    <div
                        className="text-center text-4xl text-gray-800 mb-4"
                        data-sal="slide-up"
                        data-sal-delay="100"
                        data-sal-easing="ease"
                    >Tools of the trade</div>
                    <p 
                        data-sal="slide-up"
                        data-sal-delay="100"
                        data-sal-easing="ease"
                        className="text-center tracking-normal md:tracking-wider"
                    >
                        We've got plenty of tools in our shed. <br/>
                        These are the sharpest:
                    </p>
                </div>
            </div>
            <div className="bg-gray-400 pb-16">
                <div className="container mx-auto">
                    <div className="md:flex md:flex-wrap -mx-4 px-10 md:px-0">
                        {/* laravel card */}
                        <div 
                            className="md:w-1/2 lg:w-1/3 px-4 md:mb-0 mb-8"
                            data-sal="slide-up"
                            data-sal-delay="100"
                            data-sal-easing="ease"
                        >
                            <div className={Styles.card}>
                                <div>
                                    <img src={Laravel} alt="Laravel" className="w-full h-32 object-center object-contain"/>
                                </div>
                                <h3 className="uppercase text-center text-3xl mt-8 mb-4">Laravel</h3>
                                <p className="text-center">The present and future of backend development. Laravel ranks highest as the modern backend framework for web.</p>
                            </div>
                        </div>
                        {/* VueJS card */}
                        <div 
                            className="md:w-1/2 lg:w-1/3 px-4 md:mb-0 mb-8"
                            data-sal="slide-up"
                            data-sal-delay="100"
                            data-sal-easing="ease"
                        >
                            <div className={Styles.card}>
                                <div>
                                    <img src={VueJS} alt="Laravel" className="w-full h-32 object-center object-contain"/>
                                </div>
                                <h3 className="uppercase text-center text-3xl mt-8 mb-4">Vue JS</h3>
                                <p className="text-center">
                                    VueJS is a progressive Javascript framework used for building modern web interfaces and single page applications (SPAs).
                                </p>
                            </div>
                        </div>
                        {/* Gatsby card */}
                        <div 
                            className="md:w-1/2 lg:w-1/3 px-4 md:mb-0 mb-8"
                            data-sal="slide-up"
                            data-sal-delay="100"
                            data-sal-easing="ease"
                        >
                            <div className={Styles.card}>
                                <div>
                                    <img src={GatsbyJS} alt="Laravel" className="w-full h-32 object-center object-contain"/>
                                </div>
                                <h3 className="uppercase text-center text-3xl mt-8 mb-4">Gatsby JS</h3>
                                <p className="text-center">Build blazing fast, modern apps and websites with Gatsbyjs. It is a static site generator based on ReactJS.</p>
                            </div>
                        </div>
                        {/* Docker card */}
                        <div 
                            className="md:w-1/2 lg:w-1/3 px-4 md:mt-12"
                            data-sal="slide-up"
                            data-sal-delay="100"
                            data-sal-easing="ease"
                        >
                            <div className={Styles.card}>
                                <div>
                                    <img src={Docker} alt="Laravel" className="w-full h-32 object-center object-contain"/>
                                </div>
                                <h3 className="uppercase text-center text-3xl mt-8 mb-4">Docker</h3>
                                <p className="text-center">Is a tool designed to make it easier to create, deploy and run applications quickly and efficiently by using containers. </p>
                            </div>
                        </div>

                        {/* Tailwindcss card */}
                        <div 
                            className="md:w-1/2 lg:w-1/3 px-4 mt-8 md:mt-12"
                            data-sal="slide-up"
                            data-sal-delay="100"
                            data-sal-easing="ease"
                        >
                            <div className={Styles.card}>
                                <div>
                                    <img src={Tailwindcss} alt="Laravel" className="w-full h-32 object-center object-contain"/>
                                </div>
                                <h3 className="uppercase text-center text-3xl mt-8 mb-4">Tailwind css</h3>
                                <p className="text-center">
                                    Is a highly customizable, modern CSS framework that gives all of the building blocks a developer need to build bespoke designs.
                                </p>
                            </div>
                        </div>

                        {/* More card */}
                        <div 
                            className="md:w-1/2 lg:w-1/3 px-4 mt-12"
                            data-sal="slide-up"
                            data-sal-delay="100"
                            data-sal-easing="ease"
                        >
                            <div className={Styles.card}>
                                <div>
                                    <img src={More} alt="Laravel" className="w-full h-32 object-center object-contain"/>
                                </div>
                                <h3 className="uppercase text-center text-3xl mt-8 mb-4">And more...</h3>
                                <p className="text-center">
                                    These are few. There are more modern tools and technologies we use during build, deploy and production phases to equip ourselves.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tools