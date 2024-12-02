import React from 'react';


export default function Sidenav() {
    return <>
        <div className="contsiner-fluid">
            <div className="row content">
                <div className="col-sm-2 sidenav">
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

            </div>
        </div>

    </>
}