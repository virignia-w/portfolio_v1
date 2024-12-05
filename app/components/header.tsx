"use client";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image"
import logo from "../public/LOGO.png"



export default function Header() {
    const pathname = usePathname();
    const router = useRouter();

    useEffect(()=> {
        // function directToLoginPage() {
            if (pathname === "/") {
                router.replace("/home");
            }
    }, [pathname]);
    
    
    return <>
        <nav className="navbar navbar-expand-lg mb-0">
                <div>
                    <a className="navbar-brand" href="#"> <Image className="logo" src={logo} style={{width:70, height:45}} alt="logo" /> </a>
                </div>

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
        </nav>

    </>
}