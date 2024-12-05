import React from "react";
import Header from "../components/header";
import Sidenav from "../components/sidenav";
import Image from "next/image";
import myPic from "../public/myPic.png";
import figma from "../public/figma.png";
import xd from "../public/xd.png";
import ps from "../public/ps.png";
import ai from "../public/ai.png";
import id from "../public/id.png";
import ppt from "../public/ppt.png";
import canva from "../public/canva.png";
import html from "../public/html.png";
import css from "../public/css.png";
import js from "../public/js.png";
import npm from "../public/npm.png";
import react from "../public/recat.png";
import competitor from "../public/competitor san.png";
import research from "../public/consumer r.png";
import persona from "../public/persona.png";
import mapping from "../public/mapping.png";
import test from "../public/testing.png";
import present from "../public/present.png";
import { FaLinkedin, FaInstagram, FaBehance } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";


export default function Page() {
   return <>

      <div id="container m-0 p-0 gx-0">
         <div className="row ">
            <div className="col-12" id="myHeader">
               <Header />
            </div>
         </div>
         <div className="container-all">
            <div className="col-2 container p-0 m-0 d-flex">

               <Sidenav />

            </div>
            <div className="container allContent col-10 m-0">
               <div className="container p-0 ms-0 greeting">
                  <div className="row firstHi">
                     <Image className="mypic col-6" src={myPic} style={{ width: (416), height: (416) }} alt="my pictute" />
                     <div className="helloCon col-6">
                        <h1 className="hello">Hi, I'm <strong>Virginia</strong></h1>
                        <p className="p1"> Back in Taiwan, I worked as a <strong>senior motor-scooter UX Designer.</strong> Before that, I studied <strong>Product Design at university.</strong><br /><br />
                           After spending 5 years in product planning, I developed an interest in degital UX design, as it combines planning, design, and research. In the summer of 2023, I moved to Canada and studied <strong>UX design at St. Lawrence College</strong> and <strong>Web development at George Brown College.</strong></p>
                     </div>
                  </div>
               </div>

               <div className="container p-0 ms-0 intro">
                  <div className="row mystory storyRow">
                     <div className="col-3">
                        <h1>My Story</h1>
                     </div>
                     <div className="col-9">
                        <p className="p1"> I am <strong>passionate about studying users, competitors, and the market</strong> to <strong>design user-friendly products.</strong> I
                           <strong>enjoy collaborating with a team</strong> to create exceptional products.<br /><br />

                           <strong>Drawing</strong> is another passion of mine, with over <strong>10 years of experience.</strong> Although I do not have a graphic design degree, I
                           am confident in my aesthetic abilities.<br /><br />
                           Now, I am ready to contribute my skills as a web designer.</p>
                     </div>
                  </div>
               </div>
               <div className="container p-0 ms-0 ecperience">
                  <div className="row myExperience">
                     <div className="col-3">
                        <h1>Experience</h1>
                     </div>
                     <div className="col-9">
                        <ul>
                           <li>Sales Associate</li>
                           <li>Product planner/UX designer</li>
                           <li>Design Assistant/ Customer Service</li>
                        </ul>
                     </div>
                  </div>
               </div>
               <hr />
               <div className="container p-0 ms-0 skills">
                  <div className="row">
                     <h1>UX Skills & PM Tools</h1>
                     <div className="skillsticker">
                        <div className="skillPic">
                           <Image src={competitor} alt="Competitor Scan" />
                        </div>
                        <div className="skillPic">
                           <Image src={research} alt="Consumer Research" />
                        </div>
                        <div className="skillPic">
                           <Image src={persona} alt="Persona/ Scenario" />
                        </div>
                        <div className="skillPic">
                           <Image src={mapping} alt="Function/Empathy Mapping" />
                        </div>
                        <div className="skillPic">
                           <Image src={test} alt="Usability Testing" />
                        </div>
                        <div className="skillPic">
                           <Image src={present} alt="Presentations" />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="container p-0 ms-0 skills">
                  <div className="row DesignRow">
                     <h1>Design Tools</h1>
                     <div className="skillsticker">
                        <div className="skillPic">
                           <Image src={figma} alt="Figma" />
                           <h3>Figma</h3>
                        </div>
                        <div className="skillPic">
                           <Image src={xd} alt="Adobe XD" />
                           <h3>Adobe XD</h3>
                        </div>
                        <div className="skillPic">
                           <Image src={ps} alt="Photoshop" />
                           <h3>Photoshop</h3>
                        </div>
                        <div className="skillPic">
                           <Image src={ai} alt="Illustrator" />
                           <h3>Illustrator</h3>
                        </div>
                        <div className="skillPic">
                           <Image src={id} alt="Indesign" />
                           <h3>Indesign</h3>
                        </div>
                        <div className="skillPic">
                           <Image src={ppt} alt="PowerPoint" />
                           <h3>PowerPoint</h3>
                        </div>
                        <div className="skillPic">
                           <Image src={canva} alt="Canva" />
                           <h3>Canva</h3>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="container p-0 ms-0 skills">
                  <div className="row">
                     <h1>Development Tools</h1>
                     <div className="skillsticker">
                        <div className="skillPic">
                           <Image src={html} alt="HTML" />
                           <h3>HTML</h3>
                        </div>
                        <div className="skillPic">
                           <Image src={css} alt="CSS" />
                           <h3>CSS</h3>
                        </div>
                        <div className="skillPic">
                           <Image src={js} alt="JavaScript" />
                           <h3>JavaScript</h3>
                        </div>
                        <div className="skillPic">
                           <Image src={npm} alt="npm" />
                           <h3>npm</h3>
                        </div>
                        <div className="skillPic">
                           <Image src={react} alt="React" />
                           <h3>React</h3>
                        </div>
                     </div>
                  </div>
               </div>
               <hr />
               <div className="container p-0 ms-0 background">
                  <div className="row">
                     <h1>Education Background</h1>
                     <div className="GBC">
                        <p className="p1">2024-2025</p>
                        <div className="school"><h3 className="h3Ubderline">Web Development & Front-End Design</h3>
                           <p className="p1">George Brown College, Canada</p>
                        </div>
                     </div>
                     <div className="SLC">
                        <p className="p1">2023-2024</p>
                        <div className="school"><h3 className="h3Ubderline">UX Design</h3>
                           <p className="p1">St. Lawrence College, Canada</p></div>
                     </div>
                     <div className="MCU">
                        <p className="p1">2011-2015</p>
                        <div className="school"><h3 className="h3Ubderline">Bachelor of Design in Product Design</h3>
                           <p className="p1">Ming Chuan University (MCU), Taiwan</p></div>
                     </div>
                  </div>
               </div>
               <hr />
               <div className=" container p-0 ms-0 contact">
                  <div className="row contactRow">
                     <h1>Contact Me</h1>
                     <div className="contactCon">
                        <div className="col-7">
                           <p className="p1">Hey! If you're interested in working with me or would like more details, feel free to reach out to me! </p>
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
         </div>
      </div>

      <footer className="container-fluid text-center ">
         <p>&copy; 2024 Virignia Wang</p>
      </footer>
   </>
}