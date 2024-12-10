"use client";
import React, { use } from "react";
import { useEffect, useState, useRef} from "react";
import Header from "../components/header";
import Nav from "../components/nav";
import { recordTraceEvents } from "next/dist/trace";

export default function Page() {
   const [activeIndex, setActiveIndex] = useState(0);
  const projectsRef = useRef(null);

  const projects = [
   {
     title: "Transforming a College Website with User-Centered UX Strategies",
     img: "images/project/workshop.png",
     video: "images/project/PDrecord.mov",
     link: "/works",
   },
   {
     title: "Optimising User Experience: Reorganizing the UI Layout of a College Website",
     img: "images/project/IWKB.png",
     video: "images/project/IWKBvideo.mov",
     link: "#",
   },
   {
     title: "A Beginner-friendly Recipe App",
     img: "images/project/cook.png",
     video: "images/project/PDrecord.mov",
      link: "#",
   },
 ];

 useEffect(() => {
   const container = document.querySelector(".projectsCon"); // 確保選到正確的滾動容器
   const handleScroll = () => {
     const scrollTop = container.scrollTop || window.scrollY; // 根據滾動容器獲取滾動高度
     const projectRows = document.querySelectorAll(".projectRow");
 
     projectRows.forEach((row, index) => {
      const offsetTop = (row as HTMLElement).offsetTop - scrollTop;
 
       if (offsetTop < window.innerHeight / 2 && offsetTop > 0) {
         row.classList.add("active");
       } else {
         row.classList.remove("active");
       }
     });
   };
 
   container.addEventListener("scroll", handleScroll);
 
   return () => {
     container.removeEventListener("scroll", handleScroll);
   };
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
            <div className="projectsCon col-10">
               {[
                  {
                     title: "Transforming a College Website with User-Centered UX Strategie",
                     img: "images/project/workshop.png",
                     video: "images/project/PDrecord.mov",
                     link: "/works",
                  },
                  {
                     title: "Optimising User Experience: Reorganizing the UI Layout of a College Website",
                     img: "images/project/IWKB.png",
                     video: "images/project/IWKBvideo.mov",
                     link: "#",
                  },
                  {
                     title: "A Beginner-friendly recipe App",
                     img: "images/project/cook.png",
                     video: "images/project/PDrecord.mov",
                     link: "#",
                  },
               ].map((project, index) => (
                  <div
                     key={index}
                     className={`row projectRow ${activeIndex === index ? "active" : ""
                        }`}
                  >
                     <div className="projectText col-4">
                        <a href="/works">work</a>
                        <p className="p1">UX/UI</p>
                        <h3>
                           <a href={project.link} style={{ textDecoration: "none", color: "inherit" }}>
                              {project.title}
                           </a>
                        </h3>
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
         <div className="row footerRow">
            <footer className="container-fluid text-center ">
               <p>&copy; 2024 Virignia Wang</p>
            </footer>
         </div>
      </div>
 
   </>
}