import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { useLoaderData, useParams } from "react-router-dom";

const PhoneDetails = () => {
    const data = useLoaderData()
    // console.log(data);

    const { id } = useParams()
    const phoneId = parseInt(id)
    // console.log(typeof phoneId);

    const phone = data.find(phone => phone.product_id === phoneId)
    console.log(phone);


    const { product_id, product_title, product_image, price, description, Specification, availability, rating } = phone

    return (
        <div className="bg-[#9538E2] min-h-[400px] rounded-b-3xl relative mb-[400px]">

            <h1 className="text-white text-5xl font-bold w-7/12 mx-auto pt-6 text-center">Product Details</h1>
            <p className="w-5/12 mx-auto pt-8 text-center text-white">Here Show the Products in Details with its Name, Price Specification and Its Description</p>

            <div className="h-[540px] w-[1200px] absolute -bottom-96 left-36 border-2 p-4 rounded-3xl bg-white">

                <div className="flex gap-12">
                    <div className="h-[500px] w-5/12">
                        <img className="h-full object-cover rounded-3xl" src={product_image} alt="Shoes" />
                    </div>

                    <div className="">
                        <h2 className="card-title text-2xl pb-3 font-bold">{product_title}</h2>
                        <p className="font-bold py-3">Price: {price}k</p>

                        <div className="badge badge-outline px-12 bg-[#EAF5E6] text-[#309C08]">{availability ? 'In Stock' : 'No Stock'}
                        
                        </div>

                        <p className="py-3">{description}</p>
                        <div>
                            <p className="font-bold">Specification:</p>
                            <div className="pl-4">
                                {
                                    Specification.map((sp, index) => <p key={index}>{sp}</p>)
                                }
                            </div>
                        </div>
                        <div>
                            <p className="pt-2 font-bold">Rating:</p>

                            <div className="flex items-center">
                                <div className="rating mr-3">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <p>{rating}</p>
                            </div>
                        </div>

                        <div className="card-actions mt-4">
                            <button className="flex items-center gap-2 border p-2 px-10 rounded-full bg-[#8433C8] text-white font-bold">Add to Cart <CiShoppingCart size={20}></CiShoppingCart></button>
                            <span className="bg-white border rounded-full p-2 mr-6"><CiHeart size={20}></CiHeart></span>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PhoneDetails;