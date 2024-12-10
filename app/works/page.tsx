// import React from "react";
import Header from "../components/header";
import { IoIosArrowBack } from "react-icons/io";
import { FaLinkedin, FaInstagram, FaBehance } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import "../works.css";


export default function Page() {
    return <>
        <div id="container wrapper m-0 p-0 gx-0">
            <div className="row ">
                <div className="col-12" id="myHeader">
                    <Header />
                </div>
            </div>

            <div className="container-all">
                <div className="col-2 container p-0 m-0 d-flex">
                    <div id="navBar" className="p-3 flex-shrink-0 d-flex flex-column offcanvas-md offcanvas-start">
                        <button>
                            <IoIosArrowBack />
                            <p>Back to Menun</p>

                        </button>
                    </div>
                </div>
                <div className="container allContent col-10">
                    <div className="container workHead-card">
                        <p className="p1">UX/UI Design Group Project</p>
                        <h1>Transforming a College Website with User-Centered UX Strategies</h1>
                        <h2>Part1- PD Opportunities page aka workshop and events</h2>
                    </div>
                    <div className="container p-0 ms-0 work-mainPic">
                        <img src="images/project/PDdisplay.png" alt="PDdisplay" />
                    </div>
                    <div className="container p-0 ms-0 work-objective">
                        <hr />
                        <div className="date col-6">
                            <h1>DATE</h1>
                            <h3>January-April 2024</h3>
                        </div>
                        <div className="role col-6">
                            <h1>ROLE</h1>
                            <h3>UX researcher</h3>
                            <h3>&</h3>
                            <h3>UX/UI designer</h3>
                        </div>
                        <hr />
                    </div>
                    <div className="container p-0 ms-0 work-bcg">
                        <div className="work-bcg-text">
                            <h1>Introduction/Background</h1>
                            <p>Imagine you're a busy college faculty member, juggling classes, meetings, and grading, when you're required to attend a mandatory workshop on a new learning platform. Finally, you manage to carve out a few minutes between classes, open the webpage to register... and you're immediately met with confusion and frustration.</p>
                            <p>There are what you would see</p>
                        </div>
                        <div className="work-bcg-img">
                            <img src="images/project/PD.png" alt="PD page" />
                            <img src="images/project/PDwork.png" alt="PD page" />
                        </div>
                    </div>
                    <div className="container p-0 ms-0 work-task">
                        <h1>The task we focus on</h1>
                        <p>1. Enhance UI: Make the interface more intuitive and visually appealing.</p>
                        <p>2. Simplify content: Reduce information overload for easier navigation.</p>
                        <p>3. Streamline registration: Minimize clicks to speed up the sign-up process.</p>
                        <p>4. Improve discoverability: Help users quickly find courses</p>
                    </div>
                    <div className="container p-0 ms-0 work-action">
                        <h1>Action & My role</h1>
                        <p>Our team of six UX researchers and designers worked collaboratively on this project.</p>
                        <div className="work-research">
                            <div className="work-research-text">
                                <h2>01 Research</h2>
                                <p>Conducted literature reviews, heuristic analyses, competitive analysis, and 3 user interviews during the wireframe and prototype phases.</p>
                            </div>
                            <div className="work-research-img">
                                <img src="images/project/resaerchImg.png" />
                            </div>
                        </div>
                        <hr />
                        <div className="work-research-role">
                            <h2>My Role</h2>
                            <p>Led the competitive analysis, completed a heuristic analysis, and alternated between note-taker and interviewer in user interviews.</p>
                        </div>
                        <hr />
                        <div className="work-research-icon">
                            <img src="images/project/campSac.png" alt="competitive analysis" />
                            <img src="images/project/litera.png" alt="literature review" />
                            <img src="images/project/heurEva.png" alt="heuristic analysis" />
                        </div>
                        <div className="work-design">
                            <div className="work-design-text">
                                <h2>02 Design (sitemap/sketch/wireframe/usability testing)</h2>
                                <p>Led the design phase by collaborating with clients through sketches, wireframes, and prototypes to finalize the direction.</p>
                            </div>
                            <div className="work-design-img">
                                <img src="images/project/LOFIdis3.jpg" alt="Lofi wireframe" />
                                <p>The Lo-Fi wireframes</p>
                            </div>
                        </div>
                        <hr />
                        <div className="work-design-role">
                            <h2>My Role</h2>
                            <p>I took the lead in creating the initial sketches, provided the primary design concept, and was responsible for building the high-fidelity wireframe and prototype.</p>
                        </div>
                        <hr />
                        <div className="work-result">
                            <div className="work-result-text">
                                <h2>03 Result</h2>
                                <p>The final design beautifully aligned with the client's needs and was well-received during the presentation. The introduction of the event calendar and streamlined course organization was highly appreciated by the client, especially for simplifying the registration process and enhancing overall usability.</p>
                            </div>
                            <div className="work-result-img">
                                <img src="images/project/displayboard.png" alt="dispaly board" />
                                <img src="images/project/team.png" alt="team" />

                            </div>
                        </div>
                        <hr />
                        <div className="work-proto">
                            <h1>Final Prototype</h1>
                            <p>The final design beautifully aligned with the client's needs and was well-received during the presentation. The introduction of the event calendar and streamlined course organization was highly appreciated by the client, especially for simplifying the registration process and enhancing overall usability.</p>

                            <video width="152" height="132" controls>
                                <source src="images/project/PDrecord.mov" type="video/mp4" />
                            </video>
                        </div>
                        <hr />
                        <div className="work-team">
                            <h1>Meet the Teame</h1>
                            <div className="teamCard">
                                <h2>Dorna Dahal</h2>
                                <img src="images/project/Dorna.png" alt="Dorna Dahal" />
                                <FaLinkedin className="linkedinB" />
                            </div>
                            <div className="teamCard">
                                <h2>Harshit Bhardwaj</h2>
                                <img src="images/project/Harshit.png" alt="Harshit Bhardwaj" />
                                <FaLinkedin className="linkedinB" />
                            </div>
                            <div className="teamCard">
                                <h2>Shreya Narayan</h2>
                                <img src="images/project/Shreya.png" alt="Shreya Narayan" />
                                <FaLinkedin className="linkedinB" />
                            </div>
                            <div className="teamCard">
                                <h2>Surya Tamang</h2>
                                <img src="images/project/Surya.png" alt="Surya Tamang" />
                                <FaLinkedin className="linkedinB" />
                            </div>
                        </div>
                        <div className="work-reach">
                            <div className="col-7">
                                <h1>Reach out if you're interesting of more detailse</h1>
                            </div>
                            <div className="col-5 contactBCon">
                                <div><IoMail className="emailB" />ning93315@gmail.com
                                </div>
                                <div>
                                    <FaLinkedin className="linkedinB" />
                                    <FaInstagram className="instagramB" />
                                    <FaBehance className="behanceB" />
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
            <footer className="container-fluid text-center ">
                <p>&copy 2024 Virignia Wang</p>
            </footer>
        </div>
    </>
}