import React from "react";

export default function Nav() {
    return <>
        <div className="contsiner-fluid">
            <div className="row content">
                <div className="col-sm-2 sidenav">
                    <div className="DigitalDesign">
                        <a href="#">Digital Design</a>
                    </div>
                    <div className="PhysicalDesign">
                        <a href="#">Physical Design</a>
                    </div>
                    <div className="ServiceDesign">
                        <a href="#">Service Design</a>
                    </div>
                    <div className="More">
                        <a href="#">More</a>
                    </div>
                </div>
                <div className="col-sm-10 main-content text-left">
                    <h2>Transforming a College Website with User-Centered UX Strategies</h2>
                </div>

            </div>
        </div>

    </>
}