import React from "react";
import Header from "../components/header";
import Sidenav from "../components/sidenav";
import homeBG from "../public/homeBac.png"
import Image from "next/image";
import { FaLinkedin, FaInstagram, FaBehance } from "react-icons/fa6";
import { PiFilePdf } from "react-icons/pi";


export default function Page() {
   return <>
      <Header />

      <div className="homeBodyCont">

         <div className="greetingComtainer">
            <div className="sayHi">
               <div className="greetingHey anima">
                  <img src="images/Hey.png" />
               </div>
               <div className="greetingThere anima">
                  <img src="images/there.png" />
               </div>
            </div>
            <div className="whoIam">
               <div className="greetingIm anima">
                  <img src="images/Im.png" />
               </div>
               <div className="greetingNing anima">
                  <img src="images/NING.png" />
               </div>
               <div className="greetingWang anima">
                  <img src="images/Wang.png" />
               </div> 
            </div>
            <div className="also">
               <div className="greetingAlso anima">
                  <img src="images/also.png" />
               </div>
               <div className="greetingVir anima">
                  <img src="images/Vir.png" />
               </div>
            </div>
         </div>
         <section className="homeBtn">
            <button className="resumeB"><p className="resumeP">RESUME</p><PiFilePdf className="pdfB" /></button>
            <FaLinkedin className="linkedinB"/>
            <FaInstagram className="instagramB"/>
            <FaBehance className="behanceB"/>
         </section>


         <div className="homeBGContainer">
            <Image className="homeBG" fill src={homeBG} objectFit={'contain'} alt="home page background" />
         </div>
      </div>


      <footer className="container-fluid text-center ">
         <p>&copy; 2024 Virignia Wang</p>
      </footer>

   </>
}