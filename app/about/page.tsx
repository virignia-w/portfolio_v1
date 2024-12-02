import React from "react";
import Header from "../components/header";
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


export default function Page() {
   return <>
      <Header />



      <div className="greeting">
         <div className="firstHi">
            <div className="col-4">
               <Image className="mypic" src={myPic} style={{ width: (416), height: (416) }} alt="my pictute" />
            </div>
            <div className="col-8">
               <h1 className="hello">Hi, I'm <strong>Virginia</strong></h1>
               <p className="p1"> Back in Taiwan, I worked as a senior motor-scooter UX Designer. Before that, I studied Product Design at university. After spending 5 years in product planning, I developed an interest in UX design, as it combines planning, design, and research. In the summer of 2023, I moved to Canada and studied UX design at St. Lawrence College and Web development at George Brown College.</p>
            </div>
         </div>
      </div>
      <div className="intro">
         <div className="mystory">
            <div className="col-3">
               <h1>My Story</h1>
            </div>
            <div className="col-9">
               <p className="p1"> I am passionate about studying users, competitors, and the market to design user-friendly products. I
                  enjoy collaborating with a team to create exceptional products.

                  Drawing is another passion of mine, with over 10 years of experience. Although I do not have a graphic design degree, I
                  am confident in my aesthetic abilities.

                  Now, I am ready to contribute my skills as a web designer.</p>
            </div>
         </div>
      </div>
      <div className="ecperience">
         <div className="myExperience">
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

      <div className="skills">
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
      <div className="skills">
         <h1>Design</h1>
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
      <div className="skills">
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
      <div className="background">
         <h1>Education Background</h1>
         <ul>
            <li>
               <p>2024-2025</p>Web Development & Front-End Design<p>George Brown College, Canada</p>
            </li>
            <li>
               <p>2023-2024</p>UX Design<p>St. Lawrence College, Canada</p>
            </li>
            <li>
               <p>2011-2015</p>Bachelor of Design in Product Design<p>Ming Chuan University (MCU), Taiwan</p>
            </li>
         </ul>
      </div>

      <div className="contact">
         <h1>Contact Me</h1>


      </div>


      <footer className="container-fluid text-center ">
         <p>&copy 2024 Virignia Wang</p>
      </footer>

   </>
}