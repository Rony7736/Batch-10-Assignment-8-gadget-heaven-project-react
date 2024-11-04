

const Footer = () => {
    return (
        <footer className=" flex flex-col rounded p-10">

            <div className="border-b-2 pt-6">
                <div className="text-center my-6">
                    <h1 className="text-4xl font-extrabold my-4">Gadget Heaven</h1>
                    <p className="text-[#6B6B6F]">Leading the way in cutting-edge technology and innovation.</p>
                </div>
            </div>

            <div className="flex justify-around mx-40 my-8 text-center">

                <div>
                    <h3 className="text-lg font-bold mb-6">Services</h3>
                    <div className="text-[#6B6B6F]">
                        <p>Product Support</p>
                        <p>Order Tracking</p>
                        <p>Shipping & Delivery</p>
                        <p>Returns</p>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-6">Company</h3>
                    <div className="text-[#6B6B6F]">
                        <p> About Us</p>
                        <p>Careers</p>
                        <p>Contact</p>
                    </div>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-6">Legal</h3>
                    <div className="text-[#6B6B6F]">
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                    </div>
                </div>

            </div>


            <aside className="text-center">
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Rony Chakrabarty</p>
            </aside>
        </footer>
    );
};

export default Footer;