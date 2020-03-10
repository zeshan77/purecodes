import React from "react"
import { Link } from "gatsby"
import Styles from "./header.module.css"

const Header = () => {
    return (
        <header className="bg-primary-blue py-4">
            <div className="container mx-auto border-b border-gray-500 md:flex justify-between text-gray-300 px-4 md:px-0">
                <div className="text-center md:text-left mb-10 md:mb-0">
                    <Link to="/" className={Styles.logo}>
                        <span className="text-purple-400">{'{'}</span>PureCodes<span className="text-purple-400">{'}'}</span>
                        <span className="text-sm inline-block ml-2">Software Solutions</span>
                    </Link>
                </div>
                <nav className="overflow-hidden text-center md:text-left">
                    <Link to="/" className={Styles.link}>Home</Link>
                    <Link to="/#tools" className={Styles.link}>Tools</Link>
                    <Link to="/#what-we-do" className={Styles.link}>What We Do</Link>
                    <Link to="/#contact-form" className={Styles.link}>Contact</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header