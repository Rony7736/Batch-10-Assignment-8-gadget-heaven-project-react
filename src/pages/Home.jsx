import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";
import { useEffect, useState } from "react";

const Home = () => {

    // const categories = useLoaderData()

    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div>
            <div className="min-h-[1000px]">
                {/* Banner */}
                <Banner></Banner>
            </div>

            {/* Heading */}
            <Heading title={'Explore Cutting-Edge Gadgets'}></Heading>

            {/* Categories Tab Section */}
            <div className="flex gap-6 w-11/12 mx-auto mt-10">
                <div className="w-2/12 mx-auto bg-white rounded-2xl h-[420px]">
                    <div className="text-center my-6">
                        <Categories categories={categories}></Categories>
                    </div>
                </div>

                <div className="w-10/12 mx-auto rounded-2xl">
                    <Outlet></Outlet>
                </div>
            </div>
            {/* Dynamic Nested Components */}
        </div>
    );
};

export default Home;