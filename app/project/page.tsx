"use client";
import React, { use } from "react";
import { useEffect, useState } from "react";
import Header from "../components/header";
import Nav from "../components/nav";
// import "./project.css";

export default function Page() {
   const [activeIndex, setActiveIndex] = useState<number | null>(null);

   useEffect(() => {
      const handleScroll = () => {
         const projects = document.querySelectorAll<HTMLDivElement>(".projectRow");
         const windowHeight = window.innerHeight;

         projects.forEach((project, index) => {
            const rect = project.getBoundingClientRect();
            const midScreen = windowHeight / 2;

            if (rect.top < midScreen && rect.bottom > midScreen) {
               setActiveIndex(index);
            }
         });
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return <>

      <div id="container m-0 p-0 gx-0">
         <div className="row ">
            <div className="col-12" id="myHeader">
               <Header />
            </div>
         </div>
         <div className="container-all">
            <div className="col-2 container p-0 m-0 d-flex">
               <Nav />
            </div>
            <div className="projectsCon col-10 m-0">
               {[
                  {
                     title: "Transforming a College Website with User-Centered UX Strategie",
                     img: "images/project/workshop.png",
                     video: "images/project/PDrecord.mov",
                  },
                  {
                     title: "Optimising User Experience: Reorganizing the UI Layout of a College Website",
                     img: "images/project/IWKB.png",
                     video: "images/project/IWKBvideo.mov",
                  },
                  {
                     title: "A Beginner-friendly recipe App",
                     img: "images/project/cook.png",
                     video: "images/project/PDrecord.mov",
                  },
               ].map((project, index) => (
                  <div
                     key={index}
                     className={`row projectRow ${activeIndex === index ? "active" : ""
                        }`}
                  >
                     <div className="projectText col-4">
                        <p className="p1">UX/UI</p>
                        <h3>{project.title}</h3>
                        <video width="152" height="132" controls>
                           <source src={project.video} type="video/mp4" />
                        </video>
                     </div>
                     <div className="projectPic col-7">
                        <img src={project.img} />
                     </div>
                  </div>
               ))}
               </div>
            
         </div>
      </div>
 


      <footer className="container-fluid text-center ">
         <p>&copy; 2024 Virignia Wang</p>
      </footer>
   </>
}