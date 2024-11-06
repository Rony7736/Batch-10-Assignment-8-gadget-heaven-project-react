import { useEffect, useState } from "react";
import { FaSortNumericDownAlt } from "react-icons/fa";
import WishList from "../components/WishList";
import { getStoreCartList } from "../Utility";
import CartList from "../components/CartList";
import { useLoaderData } from "react-router-dom";
const Dashboard = () => {

    

    const [cartOpen, setCartOpen] = useState(true)

    const data = useLoaderData()

    const [cartList, setCartList] = useState([])
    useEffect(() => {
        const cartList = getStoreCartList()
        const storeCartListInt = cartList.map(id => parseInt(id))

        const singleCartList = data.filter(cart => storeCartListInt.includes(cart.product_id))

        setCartList(singleCartList)

    }, [data])


    return (
        <div>
            <div className="bg-[#9538E2] min-h-[300px] rounded-b-3xl relative">

                <h1 className="text-white text-5xl font-bold w-7/12 mx-auto pt-6 text-center">Dash Board</h1>
                <p className="w-7/12 mx-auto pt-8 text-center text-white">Inspirational designs, illustrations, and graphic elements from the world’s best designers. Want more inspiration? Browse our search results...</p>
                <div className="text-center mt-10 flex justify-center items-center gap-6">
                    {/* <button onClick={()=>setCartOpen(true)} className="py-3 px-10 bg-white rounded-3xl text-[#9237DE] font-bold ">Cart</button> */}

                    <button onClick={() => setCartOpen(true)} className={cartOpen ? 'bg-white text-purple-700 py-3 px-10 rounded-3xl' : 'border text-white rounded-3xl py-3 px-10'}>Cart</button>

                    {/* <button onClick={()=>setCartOpen(false)} className="py-3 px-10 border rounded-3xl text-white font-bold">Wish List</button> */}
                    <button onClick={() => setCartOpen(false)} className={cartOpen ? 'border text-white rounded-3xl py-3 px-10 ' : 'bg-white text-purple-700 py-3 px-10 rounded-3xl'}>Wish List</button>
                </div>
            </div>

            {
                cartOpen ?

                    <div>
                        <div className="flex justify-between items-center mx-40 mt-12">
                            <h1 className="text-2xl font-bold">Cart</h1>
                            <div className="flex items-center gap-6">
                                <p className="text-2xl font-bold">Total Cost:</p>
                                <div className="flex items-center gap-6">
                                    <button className="py-2 px-10 border-2 font-bold border-[#9237DE] text-[#9237DE] rounded-full flex items-center gap-2">Sort By Price <FaSortNumericDownAlt></FaSortNumericDownAlt> </button>
                                    <button className="py-2 px-10 border-2 font-bold border-[#9237DE] rounded-full">Purchase</button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="grid grid-cols-1">

                                {
                                    cartList.map(cart => <CartList key={cart.product_id} cart={cart}></CartList>)
                                }

                            </div>
                        </div>

                    </div>

                    : <WishList></WishList>
            }
        </div>
    );
};

export default Dashboard;