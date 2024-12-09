import React from 'react';


export default function Sidenav() {
    return <>
        <div id="sideBar" className="p-3 flex-shrink-0 d-flex flex-column offcanvas-md offcanvas-start">
            <div className="sidebar-option navExperience">
                <a href="#experience">Experiencen</a>
            </div>
            <div className="sidebar-option navSkills">
                <a href="#skill">Skills</a>
            </div>
            <div className="sidebar-option navEducation">
                <a href="#education">Education</a>
            </div>
            <div className="sidebar-option navContact">
                <a href="#contact">Contact</a>
            </div>
        </div>
    </>
}