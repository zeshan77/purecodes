import React from "react"
import Styles from "./banner.module.css"

const Banner = () => {
    return (
        
        <div 
            className="bg-primary-blue pb-20 pt-8"
            
        >
            <div className={`container mx-auto ${Styles.banner} px-10 md:px-0`}>
                <div>
                    <h1 className={`${Styles.heading}`}>Software For</h1>
                    <h2 className="mb-3 flex justify-center text-gray-800 text-4xl tracking-wide">
                        Strength and Focus
                    </h2>
                    <p className="flex justify-center tracking-widest">
                        We help companies turn great ideas into <br /> amazing apps, products, and services.</p>
                </div>
            </div>
        </div>
    )
}

export default Banner