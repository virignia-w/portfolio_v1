import React from "react";
import Header from "../components/header";
import homeBG from "../public/homeBac.png"
import Image from "next/image";

export default function Page() {
   return <>
      <Header />
      <div className="homeBodyCont">
         <div className="homeBGContainer">
            <Image className="homeBG" fill src={homeBG} objectFit={'contain'} alt="home page background" />
         </div>
         <div className="GreetingComtainer">
            <img className="greetingImg" src="./public/Hey.png" />
         </div>
      </div>


      <footer className="container-fluid text-center ">
         <p>&copy 2024 Virignia Wang</p>
      </footer>

   </>
}