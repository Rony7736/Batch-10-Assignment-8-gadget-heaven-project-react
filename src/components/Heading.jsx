/* eslint-disable react/prop-types */

const Heading = ({title, subtitle}) => {
    return (
        <div className="flex flex-col w-full justify-center items-center">
            <h1 className="text-4xl font-bold text-center">{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
};

export default Heading;