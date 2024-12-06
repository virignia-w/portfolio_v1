import React from "react";
import { FaLinkedin, FaInstagram, FaBehance } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export default function Contact() {
   return <>


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


   </>
}