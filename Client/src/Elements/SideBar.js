import React from "react";
import '../Assets/SideBar.css';
import { Link } from "react-router-dom";
import Histroy from "../Pages/History";
import data from "../Assets/mock-data.json"
const SideBar = () => {
     const arrJSON = data.length ;
    return(
        <>
            <div className="sidenav">
                <div className="sidenav">
                    <section className="logo"><span><Link to = '/' id="logo">Manage It</Link></span></section>
                    <section className="links">
                        <div>
                            <Link to = '/'>Dashboard</Link>
                        </div>
                        <div>
                            
                            <Link to = '/Messages'>Messages</Link>
                             {arrJSON}
                            {/* <b></b> */}
                        </div>
                        <div>
                            <Link to = '/Charts'>Charts</Link>
                        </div>
                        <div>
                            <Link to = '/History'>History</Link>
                        </div>
                    </section>
                    <section className="more-links">
                        <div>
                            <Link to = '/Settings'>Settings</Link>
                        </div>
                        <div>
                            <Link to = '/Explore'>How to use?</Link>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default SideBar;