import React from "react";


export default function Header() {
    return <>
        <nav className="navbar navbar-expand-lg nabvar-dark bg-dark fixed-top ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"> <img src="../image/LOGO.png" /></a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#linkbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="linkbar">
                    <ul className="nav" >
                        <li className="nav-item">
                            <a className="nav-link" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/project">Project</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>

    </>
}