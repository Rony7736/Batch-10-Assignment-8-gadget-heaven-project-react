import bannerImg from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="bg-[#9538E2] min-h-[600px] rounded-b-3xl relative">

            <h1 className="text-white text-5xl font-bold w-7/12 mx-auto pt-6 text-center">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className="w-5/12 mx-auto pt-8 text-center text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            <div className="text-center mt-10">
                <button className="py-3 px-10 bg-white rounded-3xl text-[#9237DE] font-bold">Shop Now</button>
            </div>

            <div className="hero h-[590px] w-[1000px] absolute -bottom-80 left-60 border-2 p-4 rounded-3xl">
                <img className='h-[550px] w-[1000px] rounded-3xl' src={bannerImg} alt="" />
            </div>

        </div>
    );
};

export default Banner;