import { useLoaderData } from "react-router-dom";
import { getStoredWishList } from "../Utility";
import { useEffect, useState } from "react";
import WishCart from "./wishCart";

const WishList = () => {
    const data = useLoaderData()

    const [wishList, setWishList] = useState([])
    useEffect(() => {
        const wishList = getStoredWishList()
        const storeWishListInt = wishList.map(id => parseInt(id))

        const storeWishList = data.filter(cart => storeWishListInt.includes(cart.product_id))

        setWishList(storeWishList)

    }, [data])
    return (
        <div>
            <h1 className="text-2xl font-bold mt-12 ml-12">Wish List</h1>
            <div className="grid grid-cols-1">

                {
                    wishList.map(cart => <WishCart key={cart.product_id} cart={cart}></WishCart>)
                }

            </div>
        </div>
    );
};

export default WishList;