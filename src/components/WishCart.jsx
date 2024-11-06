
const WishCart = ({cart}) => {

    const { product_id, product_title, product_image, price, description, availability, rating } = cart

    return (
        <div className="card card-compact flex flex-row bg-base-100 shadow-xl p-6 mt-6 border-2">
            <div>
                <img className="w-80 rounded-2xl" src={product_image} alt="" />
            </div>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{product_title}</h2>
                <p className="">{description}</p>
                <p className="font-bold text-lg">Price: ${price}</p>
            </div>
        </div>
    );
};

export default WishCart;