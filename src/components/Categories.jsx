/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {

    return (

        <div className="flex flex-col justify-center mt-4">
            <button className="flex flex-col items-center text-center gap-4">
                {
                    categories.map(category => (<NavLink to={`/category/${category.slug}`} key={category.category} className="bg-[#F2F2F3] rounded-2xl py-2 w-40">
                        {category.category}
                    </NavLink>))
                }
            </button>
        </div>

    );
};

export default Categories;

