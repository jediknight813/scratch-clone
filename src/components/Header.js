import React from "react";
import '../styles/HeaderStyles.css'


function Header() {
    function remove_donate_container() {
        document.getElementById("donate_container").remove()
    }

    return (
        <div className="header_parent_container">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /> 
            <div className="header_navbar_container">
                <div className="header_navbar_center_items_container">

                    <div style={{"height": "100%", "backgroundColor": "#4d97ff", width: "85px", display: "flex", "justifyContent": "center", "alignItems": "center"}}>
                        <img className="scratch_logo" alt="scratch logo" src="https://scratch.mit.edu/images/logo_sm.png" />
                    </div>

                    <button>Create</button>
                    <button className="explore_button">Explore</button>
                    <button>Ideas</button>
                    <button>About</button>

                    <div className="header_search">
                        <img className="magifying_glass_icon" src="https://scratch.mit.edu/images/nav-search-glass.png" alt="magifying glass" />
                        <input placeholder="Search" type={"text"}/>
                    </div>

                    <button>Join Scratch</button>
                    <button>Sign In</button>
                </div>
            </div>

            <div style={{"width": "100%", "height": "51px"}}> </div>

            <div id="donate_container" className="header_donate_container">

                <div>
                    <img src="https://scratch.mit.edu/images/ideas/try-it-icon.svg" alt="donate_icon"/>
                    <p>Scratch is the world's largest free coding community for kids. Your support makes a difference.</p>
                    <button>Donate</button>
                </div>

                <i onClick={() => remove_donate_container()} class="fa fa-close"></i>

            </div>

            <div className="header_join_and_create_projects_container">

                <div className="header_join_and_create_buttons">

                    <p> Create stories, games, and animations Share with others around the world</p>

                    <div>
                        <div> <img alt="create_icon" src="https://scratch.mit.edu/svgs/intro/create.svg"/> Start Creating</div>
                        <div style={{marginLeft: "15px"}}> <img alt="join_icon" src="https://scratch.mit.edu/svgs/intro/join.svg"/> Join </div>
                    </div>

                </div>

                <div className="header_join_and_create_images">

                    <div style={{"display": "flex", "flexDirection": "column", alignItems: "center"}}>
                        <img alt="video_pic" src="https://scratch.mit.edu/svgs/intro/video-image.svg"/>
                        <button>Watch Video</button>
                    </div>

                </div>

            </div>

            <div className="header_about_container">
                <button>About Scratch</button>
                <button>For Parents</button>
                <button>For Educators</button>
            </div>

        </div>
    )
}


export default Header

