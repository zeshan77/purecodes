import React from "react"

const ContactForm = () => {
    return (
        <div id="contact-form">
            <div className="container mx-auto px-10 md:px-0 pt-10">
                <div
                    className="text-center text-4xl text-gray-800 mb-4"
                    data-sal="slide-up"
                    data-sal-delay="100"
                    data-sal-easing="ease"
                >Get in touch</div>
                <p 
                    data-sal="slide-up"
                    data-sal-delay="100"
                    data-sal-easing="ease"
                    className="text-center tracking-wider"
                >
                    We'd love to talk to you! Get in touch via the contact form.
                </p>
            </div>

            <div className="container mx-auto py-8 px-10 md:px-0 flex justify-center">
                <form action="/contact" method="POST" className="w-1/2" name="contact" data-netlify="true">
                    <div className="mb-6">
                        <label className="block text-primary-blue" for="name">Name</label>
                        <input required autocomplete="off" id="name" className="focus: outline-none focus:border-primary-blue border border-gray-300 px-3 py-3 rounded text-base w-full" type="text" name="name" placeholder="Your name" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-primary-blue" for="email">Email</label>
                        <input required autocomplete="off" id="email" className="focus: outline-none focus:border-primary-blue border border-gray-300 px-3 py-3 rounded text-base w-full" type="email" name="email" placeholder="you@example.com" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-primary-blue" for="comment">Comment</label>
                        <textarea required id="comment" className="focus: outline-none focus:border-primary-blue border border-gray-300 rounded px-3 py-1 text-base w-full h-24" name="comment" placeholder="Add a comment"></textarea>
                    </div>
                    <div>
                        <button className="bg-primary-blue px-3 py-1 rounded text-white hover:opacity-75">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm