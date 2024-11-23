import React from "react";
import Header from "../components/header";
import Image from "next/image";
import myPic from "../public/myPic.jpg";
import figma from "../public/figma.png";
import xd from "../public/xd.png";
import ps from "../public/ps.png";
import ai from "../public/adobe_illustrator.png";
import id from "../public/id.png";
import ppt from "../public/powerpoint.png";
import canva from "../public/canva-png.webp"


export default function Page() {
   return <>
      <Header />

      <div className="greeting">
         <div className="row photo">
            <div className="col-4 w-100">
               <Image className="mypic" src={myPic} alt="my pictute" />
            </div>
            <div className="col-8">
               <h2>Hi, I'm Virginia</h2>
               <p> Back in Taiwan, I worked as a senior motor-scooter UX Designer. Before that, I studied Product Design at university. After spending 5 years in product planning, I developed an interest in UX design, as it combines planning, design, and research. In the summer of 2023, I moved to Canada and studied UX design at St. Lawrence College and Web development at George Brown College.</p>
            </div>
         </div>
      </div>
      <div className="story">
         <div className="mystory">
            <div className="col-3">
               <h2>My Story</h2>
            </div>
            <div className="col-9">
               <h2>Hi, I'm Virginia</h2>
               <p> I am passionate about studying users, competitors, and the market to design user-friendly products. I
                  enjoy collaborating with a team to create exceptional products.

                  Drawing is another passion of mine, with over 10 years of experience. Although I do not have a graphic design degree, I
                  am confident in my aesthetic abilities.

                  Now, I am ready to contribute my skills as a web designer.</p>
            </div>
         </div>
      </div>
      <div className="ecperience">
         <div className="myexperience">
            <div className="col-3">
               <h2>Experience</h2>
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

      <div className="ecperience">
         <div className="myexperience">
            <div className="col-3">
               <h2>Experience</h2>
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
      <div className="Skills" id="Skills">
            <h2>Skills</h2>
            <div className="skillsticker">
                <div className="projectcard">
                    <Image src= {figma} alt="Figma"/>
                    <h3>Figma</h3>
                </div>
                <div className="projectcard">
                    <Image src={xd} alt="Adobe XD"/>
                    <h3>Adobe XD</h3>
                </div>
                <div className="projectcard">
                    <Image src={ps} alt="Photoshop"/>
                    <h3>Photoshop</h3>
                </div>
                <div className="projectcard">
                    <Image src={ai} alt="Illustrator"/>
                    <h3>Illustrator</h3>
                </div>
                <div className="projectcard">
                    <Image src={id} alt="Indesign"/>
                    <h3>Indesign</h3>
                </div>
                <div className="projectcard">
                    <Image src={ppt} alt="PowerPoint"/>
                    <h3>PowerPoint</h3>
                </div>
                <div className="projectcard">
                    <Image src={canva} alt="Canva"/>
                    <h3>Canva</h3>
                </div>
            </div>
        </div>
        <div className="Background">
            <h2>Education Background</h2>
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

        <div id="contact" className="contact">
            <h2>Contact Me</h2>
            
         
        </div>


      <footer className="container-fluid text-center ">
         <p>&copy 2024 Virignia Wang</p>
      </footer>

   </>
}