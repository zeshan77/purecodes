import React from "react"
import { Link } from "gatsby"

const Footer = () => {
    return (
        <footer className="bg-dark-blue pt-16 pb-24 text-white">
            <div className="container mx-auto px-10 md:px-0">
                {/* <div className="flex items-center"> */}
                    <ul className="flex justify-center">
                        <li className="mb-2"><Link to="/" className="hover:underline px-6">Home</Link></li>
                        <li className="mb-2"><Link to="/#tools" className="hover:underline px-6">Tools</Link></li>
                        <li className="mb-2"><Link to="/#what-we-do" className="hover:underline px-6">What We Do</Link></li>
                        <li className="mb-2"><Link to="/#contact-form" className="hover:underline px-6">Contact</Link></li>
                    </ul>
                {/* </div> */}
                {/* <div> */}
                    <ul className="flex items-center justify-center mt-8">
                        <li className="mr-6">
                            <a rel="noopener noreferrer" href="https://www.facebook.com/Pure-Codes-software-solutions-107742607507894" target="_blank">
                                <svg className="fill-current w-8 h-8 opacity-50 hover:opacity-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M12,27V15H8v-4h4V8.852C12,4.785,13.981,3,17.361,3c1.619,0,2.475,0.12,2.88,0.175V7h-2.305C16.501,7,16,7.757,16,9.291V11 h4.205l-0.571,4H16v12H12z"/></svg>
                            </a>
                        </li>
                    </ul>
                {/* </div> */}
                <div></div>
            </div>
        </footer>
    )
}

export default Footer