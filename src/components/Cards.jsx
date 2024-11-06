import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";


const Cards = () => {
    const data = useLoaderData()
    // console.log(data);

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
        // console.log(filterData, name);
    }, [data, name])

    return (
        <div>

            <div>

                {gadgets.length ?
                    <div className="grid grid-cols-3 gap-6">
                        {
                            gadgets.map((card) => (<Card card={card} key={card.id}></Card>))

                        }
                    </div>

                    : <h1 className="text-4xl text-[#9538E2] font-bold p-10">No Data Found</h1>}
            </div>

        </div>
    );
};

export default Cards;