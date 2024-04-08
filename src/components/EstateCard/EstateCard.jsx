import { Link } from "react-router-dom";

const EstateCard = ({ estate }) => {

    const { id, estate_title, segment_name, image, price, status, area } = estate;

    return (
        <div className="flex flex-col shadow-lg max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md text-black">
            <div>
                <img src={image} alt="" className="object-cover w-full rounded-md mb-4 h-60 sm:h-96 bg-gray-500" />
                <p className="text-[#8C8C8C]">{segment_name}</p>
                <h2 className="mb-1 text-xl font-semibold mt-2">{estate_title}</h2>
            </div>
            <div className="flex flex-wrap justify-between">
                <div className="space-x-2 text-gray-600">
                    <button aria-label="Share this post" type="button" className="p-2 text-center">
                        <span className="font-medium">Price: {price}</span>
                    </button>
                </div>
                <div className="flex space-x-2 text-sm text-gray-600">
                    <button type="button" className="flex items-center p-1 space-x-1.5">
                        <span className="font-medium">Area: {area}</span>
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <span className="bg-gray-500 px-3 py-1 rounded-sm text-white">For {status}</span>
                <Link to={`/details/${id}`}>
                    <button className="btn bg-gray-400 text-white hover:bg-gray-600 duration-300">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default EstateCard;