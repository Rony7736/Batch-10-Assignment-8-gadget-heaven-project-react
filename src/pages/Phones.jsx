import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "../components/Card";


const Phones = () => {

    const data = useLoaderData()
    console.log(data);

    const [gadgets, setGadgets] = useState([])

    const { name } = useParams()

    useEffect(() => {

        if (!name) {
            setGadgets(data)
            return
        }
        else if (name == 'all') {
            setGadgets(data)
            return
        }
        const filterData = [...data].filter((i) => i.category.toLowerCase() === name)
        setGadgets(filterData)
    }, [data, name])


    return (
        <div>
            <div className="bg-[#9538E2] min-h-[280px] rounded-b-3xl">

                <h1 className="text-white text-5xl font-bold w-7/12 mx-auto pt-6 text-center">All Products are here </h1>
                <p className="w-6/12 mx-auto pt-8 text-center text-white">One of the main tasks of a product information management system is transforming product data from a wide range of different sources into meaningful and salable products. Products, variants, and articles are therefore the focus of OctoPIM.</p>
            </div>

            <h1 className="text-center text-6xl font-bold mt-10 underline text-[#FFBE00]">You can also See Products details from here</h1>

            <div className="grid grid-cols-4 gap-6 py-12">
                {
                    gadgets.map((card) => (<Card card={card} key={card.id}></Card>))
                }
            </div>

        </div>
    );
};

export default Phones;



