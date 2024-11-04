import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";


const Cards = () => {
    const data = useLoaderData()
    // console.log(data);
    
    const [gadgets, setGadgets] = useState([])
    const { name } = useParams()

    useEffect(() => {

        if(!name){
            setGadgets(data)
            return
        }
        else if(name == 'all'){
            setGadgets(data)
            return
        }
        const filterData = data.filter((i)=> i.category.toLowerCase() === name)
        setGadgets(filterData)
        console.log(filterData, name);
    }, [data, name])
    
    

    return (
        <div className="grid grid-cols-3 gap-6">
            {
                gadgets.map((card) => (<Card card={card} key={card.id}></Card>))
            }
        </div>
    );
};

export default Cards;