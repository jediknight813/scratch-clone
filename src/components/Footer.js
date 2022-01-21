import React from "react";
import '../styles/FooterStyles.css'


function Footer() {

    return (
        <div className="footer_parent_container">

            <div className="footer_links_container">

                <div className="footer_link_items">
                    <h1>About</h1>
                    <a href=" ">About Scratch</a>
                    <a href=" ">For Parents</a>
                    <a href=" ">For Educators</a>
                    <a href=" ">For Developers</a>
                    <a href=" ">Our Team</a>
                    <a href=" ">Donors</a>
                    <a href=" ">Jobs</a>
                    <a href=" ">Donate</a>
                </div>
                <div className="footer_link_items">
                    <h1>Scratch Family</h1>
                    <a href=" ">ScratchEd</a>
                    <a href=" ">ScratchJr</a>
                    <a href=" ">Scratch Day</a>
                    <a href=" ">Scratch Conference</a>
                    <a href=" ">Scratch Foundation</a>
                    <a href=" ">Scratch Store</a>
                </div>

                <div className="footer_link_items">
                    <h1>Ressources</h1>
                    <a href=" ">Ideas</a>
                    <a href=" ">FAQ</a>
                    <a href=" ">Download</a>
                    <a href=" ">Contact Us</a>
                </div>

                <div className="footer_link_items">
                    <h1>Legal</h1>
                    <a href=" ">Terms of Use</a>
                    <a href=" "> Privacy Policy</a>
                    <a href=" ">DMCA</a>
                </div>


                <div className="footer_link_items">
                    <h1>Community</h1>
                    <a href=" ">Community Guidelines</a>
                    <a href=" ">Discussion Forums</a>
                    <a href=" ">Scratch Wiki</a>
                    <a href=" ">Statistics</a>
                </div>

            </div>

            <select className="footer_select_language">
                <option>English</option>
            </select>

            <div className="footer_text_container">
                Scratch is available for free thanks to support from our <a href=" ">donors</a>. We are grateful to our Founding Partners:
                Massachusetts Institute of Technology, National Science Foundation, Siegel Family Endowment, and LEGO Foundation.
            </div>

        </div>
    )
}


export default Footer

