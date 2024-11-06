/* eslint-disable react/prop-types */
import { MdDeleteForever } from "react-icons/md";

const CartList = ({ cart }) => {

    const { product_id, product_title, product_image, price, description, Specification, availability, rating } = cart

    return (
        <div className="card card-compact flex flex-row bg-base-100 shadow-xl p-6 mt-6 border-2">
            <div>
                <img className="w-80 rounded-2xl" src={product_image} alt="" />
            </div>
            <div className="card-body">
                <div className="flex justify-between">
                    <h2 className="card-title text-2xl font-bold">{product_title}</h2>
                    <button className="bg-warning p-4 rounded-full"><MdDeleteForever size={24}></MdDeleteForever></button>
                </div>
                <p className="">{description}</p>
                <p className="font-bold text-lg">Price: {price}k</p>
            </div>
        </div>
    );
};

export default CartList;