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
                <div className="container allContent col-10 ">
                    <div className="row col-12 workHead-card">
                        <p className="p1">UX/UI Design Group Project</p>
                        <h1>Transforming a College Website with User-Centered UX Strategies</h1>
                        <h2>Part1- PD Opportunities page aka workshop and events</h2>
                    </div>
                    <div className="row work-mainPic">
                        <img src="images/project/PDdisplay.png" alt="PDdisplay" />
                    </div>
                    <hr />
                    <div className="row p-0 ms-0 work-objective col-12">

                        <div className="date col-5 text-center">

                            <h1 className="align-top">DATE</h1>
                            <h3 className="date-text ">January-April 2024</h3>
                        </div>
                        <div className="vr"></div>
                        <div className="role col-5 text-center ">
                            <h1 className="align-top">ROLE</h1>
                            <h3 className="date-text">UX researcher</h3>
                            <h3 className="date-text">&</h3>
                            <h3 className="date-text">UX/UI designer</h3>
                        </div>

                    </div>
                    <hr />
                    <div className="row p-0 ms-0 work-bcg col-12">
                        <div className="work-bcg-text">
                            <h1>Introduction/Background</h1>
                            <p className="p1">Imagine you're a busy college faculty member, juggling classes, meetings, and grading, when you're required to attend a mandatory workshop on a new learning platform. Finally, you manage to carve out a few minutes between classes, open the webpage to register... and you're immediately met with confusion and frustration.</p>
                            <p className="p1">There are what you would see</p>
                        </div>

                        <div id="carouselExampleFade" className="carousel slide carousel-fade ">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="images/project/PD.png" className="d-block w-100 work-bcg-img" alt="PD page" />
                                </div>
                                <div className="carousel-item">
                                    <img src="images/project/PDwork.png" className="d-block w-100 work-bcg-img" alt="PD page" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="row p-0 ms-0 work-task col-12">
                        <h1>The task we focus on</h1>
                        <p className="p1">1. Enhance UI: Make the interface more intuitive and visually appealing.</p>
                        <p className="p1">2. Simplify content: Reduce information overload for easier navigation.</p>
                        <p className="p1">3. Streamline registration: Minimize clicks to speed up the sign-up process.</p>
                        <p className="p1">4. Improve discoverability: Help users quickly find courses</p>
                    </div>
                    <div className="row p-0 ms-0 work-action col-12">
                        <h1>Action & My role</h1>
                        <p className="p1">Our team of six UX researchers and designers worked collaboratively on this project.</p>
                        <div className="row work-research col-12">
                            <div className="work-research-text">
                                <h2>01 Research</h2>
                                <p className="p1">Conducted literature reviews, heuristic analyses, competitive analysis, and 3 user interviews during the wireframe and prototype phases.</p>
                            </div>
                            <div className="work-research-img">
                                <img src="images/project/resaerchImg.png" />
                            </div>
                        </div>
                        <hr />
                        <div className="work-research-role col-12">
                            <h2>My Role</h2>
                            <p className="p1">Led the competitive analysis, completed a heuristic analysis, and alternated between note-taker and interviewer in user interviews.</p>
                        </div>
                        <hr />
                        <div className="work-research-icon">
                            <img src="images/project/campSac.png" alt="competitive analysis" />
                            <img src="images/project/litera.png" alt="literature review" />
                            <img src="images/project/heurEva.png" alt="heuristic analysis" />
                        </div>
                        <div className="row work-design col-12">
                            <div className="work-design-text">
                                <h2>02 Design (sitemap/sketch/wireframe/usability testing)</h2>
                                <p className="p1">Led the design phase by collaborating with clients through sketches, wireframes, and prototypes to finalize the direction.</p>
                            </div>
                            <div className="work-design-img">
                                <img src="images/project/LOFIdis3.jpg" alt="Lofi wireframe" />
                                <p className="p1">The Lo-Fi wireframes</p>
                            </div>
                        </div>
                        <hr />
                        <div className="work-design-role col-12">
                            <h2>My Role</h2>
                            <p className="p1">I took the lead in creating the initial sketches, provided the primary design concept, and was responsible for building the high-fidelity wireframe and prototype.</p>
                        </div>
                        <hr />
                        <div className="row work-result col-12">
                            <div className="work-result-text">
                                <h2>03 Result</h2>
                                <p className="p1">The final design beautifully aligned with the client's needs and was well-received during the presentation. The introduction of the event calendar and streamlined course organization was highly appreciated by the client, especially for simplifying the registration process and enhancing overall usability.</p>
                            </div>
                            <div className="work-result-img">
                                <img src="images/project/displayboard.png" alt="dispaly board" />
                                <img src="images/project/team.png" alt="team" />

                            </div>
                        </div>
                        <hr />
                        <div className="row work-proto col-12">
                            <h1>Final Prototype</h1>
                            <p className="p1">The final design beautifully aligned with the client's needs and was well-received during the presentation. The introduction of the event calendar and streamlined course organization was highly appreciated by the client, especially for simplifying the registration process and enhancing overall usability.</p>

                            <video width="152" height="132" controls>
                                <source src="images/project/PDrecord.mov" type="video/mp4" />
                            </video>
                        </div>
                        <hr />
                        <div className="row work-team col-12">
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
                        <div className="row work-reach col-12">
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