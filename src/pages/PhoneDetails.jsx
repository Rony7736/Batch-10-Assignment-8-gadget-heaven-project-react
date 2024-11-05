import { useLoaderData, useParams } from "react-router-dom";

const PhoneDetails = () => {
    const loaderData = useLoaderData()
    // const {id} = useParams()
    console.log(loaderData);
    

    const { product_id, product_title, product_image, category, price, description, Specification, availability, rating } = loaderData

    return (
        <div className="bg-[#9538E2] min-h-[400px] rounded-b-3xl relative mb-[400px]">

            <h1 className="text-white text-5xl font-bold w-7/12 mx-auto pt-6 text-center">Product Details</h1>
            <p className="w-5/12 mx-auto pt-8 text-center text-white">Here Show the Products in Details with its Name, Price Specification and Its Description</p>

            <div className="h-[590px] w-[1200px] absolute -bottom-96 left-36 border-2 p-4 rounded-3xl bg-white">
                <p>{product_title}</p>
            </div>

        </div>
    );
};

export default PhoneDetails;