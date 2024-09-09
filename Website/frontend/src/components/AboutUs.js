import React, { Component } from "react";
import Navbar from "./Navbar";

export default class AboutUs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Navbar />
                <div class="about-section">
                    <h1>About Us</h1>
                    <p>INTRODUCING THE TEAM</p>
                </div>
            
                
                <div class="row">
                    {/* <! -- Farzaan Wadiwalla --> */}
                    <div class="column">
                        <div class="card">
                            <img class="profile-picture" src="https://cdn.discordapp.com/attachments/886044645036019722/910024586261823548/IMG_9805.PNG" alt="Farzaan" />
                            <div class="container">
                                <h2>Farzaan Wadiwalla</h2>
                                <p class="title">Product Analyst</p>
                                <br />Farzaan is a junior at Lincoln Highschool in Portland, Oregon. He is fascinated by the world of artificial intelligence and hopes to further his knowledge in AI-technology to solve real-world problems.
                                <br /><br />Contact Information:
                                <br />farzaanw@gmail.com
                            
                             
                            </div> 
                        </div>
                    </div>

                    {/* <! -- Daniel Gao --> */}
                    <div class="column">
                        <div class="card">
                            <img class="profile-picture" src="https://cdn.discordapp.com/attachments/885725394110644224/909133221889982524/profile_photo.png" alt="Daniel" />
                            <div class="container">
                                <h2>Daniel Gao</h2>
                                <p class="title">Product Lead</p>
                                <br />Daniel is a high school student from San Francisco who is interested in CS and Math. He hopes to explore the applications of AI and use them to solve problems in the world.
                                <br /><br />Contact Information:
                                <br />dgao22@siprep.org
                          
                            </div>
                        </div>
                    </div>

                    {/* <! -- Jasper Shen --> */}
                    <div class="column">
                        <div class="card">
                            <img class="profile-picture" src="https://media.discordapp.net/attachments/715017264361111563/867076500368785478/unknown.png?width=728&height=713" alt="Jasper" />
                            <div class="container">
                                <h2>Jasper Shen</h2>
                                <p class="title">Product Designer</p>
                                <br />Jasper is a high school student in Colorado that programs for fun. He hopes to be able to connect artificial intelligence and neuroscience in some way.
                                <br /><br />Contact Information:
                                <br />jaspershen21@gmail.com
                           
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    {/* <! -- Ryan Vong --> */}
                    <div class="column">
                        <div class="card">
                            <img class="profile-picture" src="https://cdn.discordapp.com/attachments/886044529881403462/910008541169995796/Screenshot_2021-11-15_192817.png" alt="Ryan" />
                            <div class="container">
                                <h2>Ryan Vong</h2>
                                <p class="title">Product Engineer</p>
                                <br />Ryan is a high school senior who resides in Los Angeles, California. In his free time, he usually reads sci-fi books and overall he has a spontaneous personality who likes trying new things.
                                <br /><br />Contact Information:
                                <br />ryanvong8@gmail.com
                              
                            </div>
                        </div>
                    </div>

                    {/* <! -- Nick Goodchild --> */}
                    <div class="column">
                        <div class="card">
                            <img class="profile-picture" src="https://cdn.discordapp.com/attachments/886044587712450630/909635675853324288/GoodchildNicholasSenior.jpg" alt="Nick" />
                            <div class="container">
                                <h2>Nick Goodchild</h2>
                                <p class="title">Product Engineer</p>
                                <br />Nick is a high school senior from a town in the middle of nowhere; Ashburnham, Massachusetts. He loves all things STEM, and is planning on pursuing a degree in Robotics Engineering and/or Math Education.
                                <br /><br />Contact Information:
                                <br />nickgoodchild654@gmail.com
                            
                            </div>
                        </div>
                    </div>

                    {/* <! -- Cameron Jackson --> */}
                    <div class="column">
                        <div class="card">
                            <img class="profile-picture" src="https://media.discordapp.net/attachments/885725394110644224/909154845120946186/Screen_Shot_2021-11-13_at_10.56.41_AM.png" alt="Cameron" />
                            <div class="container">
                                <h2>Cameron Jackson</h2>
                                <p class="title">Mentor</p>
                                <br />Cameron Jackson attends the University of Texas at Dallas as a Software Engineering major. Cameron enjoys knitting, playing chess and learning about cutting edge AI in his free time. He is deeply interested in way too many different fields of AI and sharing this passion with everyone within earshot.
                               
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
