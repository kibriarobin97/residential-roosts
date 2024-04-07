import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <div>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;