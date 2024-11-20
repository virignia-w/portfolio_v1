import React from "react";
import Header from "../components/header";
import Nav from "../components/nav";

export default function Page() {
    return <>
     <Header />
     <Nav />

     <section className="AboutMe" id="AboutMe">
            <div className="Photo">
                <img src="../image/my pic.jpg" alt="my pictute"/>
            </div>
            <div>
                <h2>Hi, I'm Virginia</h2>
                <p> Back in Taiwan, I worked as a senior motor-scooter UX Designer. Before that, I studied Product
                    Design at
                    university.

                    After spending 5 years in product planning, I developed an interest in UX design, as it combines
                    planning, design, and
                    research. In the summer of 2023, I moved to Canada and studied UX design at St. Lawrence College and
                    Web
                    development at
                    George Brown College.</p>
            </div>
        </section>
     
 <footer className="container-fluid text-center ">
    <p>&copy 2024 Virignia Wang</p>
 </footer>

    </>
  }