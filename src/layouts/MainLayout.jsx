import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            <div className="container mx-auto px-6 bg-[#F7F7F7] mt-6">
                {/* Navbar */}
                <Navbar></Navbar>
            </div>

            <div className="container mx-auto min-h-[calc(100vh-538px)] bg-[#F7F7F7] px-6 pb-12">
                {/* Dunamic section */}
                <Outlet></Outlet>
            </div>

            <div className="container mx-auto">
                {/* Footer */}
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;