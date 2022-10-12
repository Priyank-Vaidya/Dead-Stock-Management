import React from "react";
import SideBar from "../Elements/SideBar";
import '../Assets/History.css';
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Histroy = () => {
    const Search = () =>{
        console.log('Search button is clicked')
    }
    return(
        <>
        <SideBar />
            <div className="History">
                <div className="upper-half">
                    <div className="left-half">
                        <ul id="left-texts">
                            <li id="Stock"> Stock</li>
                            <li>Get notified on every update...</li>
                        </ul>
                    </div>
                    <div className="left-lower-half">
                        <section className="search-bar">
                            <div id="Search">
                                <input type="text" placeholder="Search items..." />
                            </div>
                            <div>
                                <button type="submit" onClick={Search}><FaSearch /></button>
                            </div>
                        </section>
                                    
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Histroy;