"use client";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image"
import logo from "../public/LOGO.png"



export default function Header() {
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        // function directToLoginPage() {
        if (pathname === "/") {
            router.replace("/home");
        }
    }, [pathname]);


    return <>
        <nav className="navbar navbar-expand-sm mb-0">
            <div className="container-fluid">
                <div>
                    <a className="navbar-brand" href="/home"> <Image className="logo" src={logo} style={{ width: 70, height: 45 }} alt="logo" /> </a>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" id="linkbar" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="nav " >
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
                            <a className="nav-link" href="/about#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </>
}