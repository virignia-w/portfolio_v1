import React from "react";

export default function Nav() {
    return <>
        <div id="navBar" className="p-3 flex-shrink-0 d-flex flex-column offcanvas-md offcanvas-start">
            
                    <div className="navDigitalDesign">
                        <a href="#">Digital Design</a>
                    </div>
                    <div className="PhysicalDesign">
                        <a href="#">Product Design</a>
                    </div>
                    <div className="ServiceDesign">
                        <a href="#">Service Design</a>
                    </div>
                    <div className="More">
                        <a href="#">More</a>
                    </div>
            
        </div>

    </>
}