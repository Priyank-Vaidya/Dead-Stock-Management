import React,{ useState } from "react";
import SideBar from "../Elements/SideBar";
import '../Assets/Dashboard.css';
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import data from '../Assets/mock-data.json';

const Dashboard = () => {
    const [Products, setProducts] = useState(data);
    const addProduct = () =>{
        console.log('button is clicked')
    }
    const Search = () => {
        console.log('search button clicked')
    }
    return(
        <>
            <SideBar />
            <div className="dashboard">
                <div className="upper-half">
                    <section className="scan-item">
                    
                            <ul id="intro-text">
                                <li id="stock">Stock</li>
                                <li>Get notified on every update...</li>
                                <Link>
                                <li id="Scan-button"><button>
                                    Scan
                                    </button>
                                </li>
                                </Link>    
                            </ul>
                        
                    </section>
                    <section className="add-item">
                        <div className="search-container">
                            <b>
                                <input type="text" placeholder="Search items..." />
                            </b>
                            <b>
                                <button type="submit" onClick={Search}><FaSearch /></button>
                            </b>
                            
                        </div>
                        <div>
                            <Link>
                                <button onClick={addProduct}>Add Product</button>
                            </Link>
                        </div>
                    </section>
                </div>
                <hr />
                <div className="lower-half">
                    <div className="sort">
                        <label for="products">Sort By: </label>
                            <select id="sort-options">
                                <option value="Expiry date">Expiry Date</option>
                                <option value="name">Name</option>
                                <option value="date added">date added</option>
                            </select>
                    </div>    
                    <div className="list">
                        <table className="Products">
                            <tr>
                                <th>id</th>
                                <th>Product Name</th>
                                <th>Location</th>
                                <th>Expiry</th>
                                <th>Quantity</th>
                                <th>Status </th>
                            </tr>
                            <tbody>
                                {/* <tr>
                                    <td>IC Chips</td>
                                    <td>Warehouse 3, Batch 8</td>
                                    <td><span className="dot"></span>450 Days</td>
                                    <td>760 days</td>
                                    <td>In-stock</td>
                                </tr> */}
                                {Products.map((Products) => (
                                    <tr>
                                        {/* <td><Link>{Products.Name}</Link></td> */}
                                        <td>{Products.id}</td>
                                        <td>{Products.Name} </td>
                                        <td>{Products.Location}</td>
                                        <td>
                                            <span className="dot"></span>
                                            {Products.Expiry}
                                        </td>
                                        <td>{Products.Quantity}</td>
                                        {/* <td>{Products.Status}</td> */}
                                        <td>
                                            <select id="staus-options"> 
                                                <option value="In-stock">In-stock</option>
                                                <option value="Expiring soon">Expiring soon</option>
                                                <option value="Ordered">Ordered</option>
                                            </select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;