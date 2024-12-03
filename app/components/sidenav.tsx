import React from 'react';


export default function Sidenav() {
    return <>
        <div id="sideBar" className="p-3 flex-shrink-0 d-flex flex-column offcanvas-md offcanvas-start">
            <div className="navExperience">
                <a href="#">Experiencen</a>
            </div>
            <div className="navSkills">
                <a href="#">Skills</a>
            </div>
            <div className="navEducation">
                <a href="#">Education</a>
            </div>
            <div className="navContact">
                <a href="#">Contact</a>
            </div>
        </div>
    </>
}