import React from "react";
import Header from "../components/header";

export default function Page() {
   return <>
      <Header />

      <div className="greeting">
         <div className="row photo">
            <div className="col-4">
               <img src="../image/my pic.jpg" alt="my pictute" />
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


      <footer className="container-fluid text-center ">
         <p>&copy 2024 Virignia Wang</p>
      </footer>

   </>
}