import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from 'react-hot-toast';
import { createContext, useState } from "react";
import { HelmetProvider } from "react-helmet-async";

export const MyContext = createContext(null)
export default function MainLayout() {

    const [priceContext, setPriceContext] = useState(0)
    const priceLoad = {
        priceContext,
        setPriceContext,
    }

    return (

        <HelmetProvider>

            <div>
                <Toaster></Toaster>

                <MyContext.Provider value={priceLoad}>

                    <div className="container mx-auto px-6 bg-[#F7F7F7] mt-6 h-16">
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

                </MyContext.Provider>


            </div>

        </HelmetProvider>

    );
};
