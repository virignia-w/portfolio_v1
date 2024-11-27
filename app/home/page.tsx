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
               <div className="greetingHey">
                  <img src="images/Hey.png" />
               </div>
               <div className="greetingThere">
                  <img src="images/there.png" />
               </div>
            </div>
            <div className="whoIam">
               <div className="greetingIm">
                  <img src="images/Im.png" />
               </div>
               <div className="greetingNing">
                  <img src="images/NING.png" />
               </div>
               <div className="greetingWang">
                  <img src="images/Wang.png" />
               </div>
            </div>
            <div className="also">
               <div className="greetingAlso">
                  <img src="images/also.png" />
               </div>
               <div className="greetingVir">
                  <img src="images/Vir.png" />
               </div>
            </div>
         </div>


         <div className="homeBGContainer">
            <Image className="homeBG" fill src={homeBG} objectFit={'contain'} alt="home page background" />
         </div>
      </div>


      <footer className="container-fluid text-center ">
         <p>&copy 2024 Virignia Wang</p>
      </footer>

   </>
}