
const Card = ({ card }) => {
    // console.log(card);

    const { product_id, product_title, product_image, category, price, description, Specification, availability, rating } = card



    return (

        <div className="card card-compact shadow-xl border">
            <figure className="p-4">
                <img src={product_image} className="w-full h-56 object-cover rounded-xl" alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p>Price: {price}k</p>

                <div>
                    <button className="border-2 border-[#8533c8a2] rounded-full py-2 px-6 text-[#8433C8] font-bold">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Card;