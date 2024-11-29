import React from "react";
import Header from "../components/header";
import homeBG from "../public/homeBac.png"
import Image from "next/image";


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
            <button className="resumeB"><i className="fa-light fa-file-pdf"></i>RESUME</button>
            <button className="linkdinB"><i className="fa-brands fa-linkedin"></i></button>
         </section>


         <div className="homeBGContainer">
            <Image className="homeBG" fill src={homeBG} objectFit={'contain'} alt="home page background" />
         </div>
      </div>


      <footer className="container-fluid text-center ">
         <p>&copy 2024 Virignia Wang</p>
      </footer>

   </>
}