import { useParams, useLoaderData, } from 'react-router-dom';

const EstateDetails = () => {

    const estates = useLoaderData()
    const { id } = useParams()

    const estate = estates.find(estate => estate.id == id);

    const { estate_title, segment_name, image, price, status, area, description, location, facilities, features } = estate;

    return (
        <div className="p-5 mx-auto w-full sm:py-8 md:py-10 text-black">
            <div className="flex flex-col max-w-6xl mx-auto overflow-hidden rounded">
                <img src={image} alt="" className="w-full bg-cover bg-center h-60 sm:h-96 bg-gray-500" />
                <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-6xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900 bg-opacity-50">
                    <div className="space-y-2">
                        <div className='flex items-center justify-between'>
                            <p className="inline-block text-2xl font-semibold text-white sm:text-3xl">{estate_title}</p>
                            <span className="bg-gray-700 font-bold px-3 py-1 rounded-sm text-white">For {status}</span>
                        </div>
                        <div className='w-[110px]'>
                            <p className=" text-gray-200 text-center rounded-lg py-1 bg-opacity-50 bg-slate-800 font-bold">{segment_name}</p>
                        </div>
                    </div>
                    <div className="text-gray-100 space-y-3">
                        <p><span className='font-bold text-gray-800'>Description: </span>{description}</p>
                        <div>
                            <p className='text-gray-800 font-bold'>Facilities:</p>
                            {
                                facilities.map((facility, idx) => <li key={idx}
                                >{facility}</li>)
                            }
                        </div>
                        <div>
                            <p className='text-gray-800 font-bold'>Features:</p>
                            {
                                features.map((feature, idx) => <li
                                    key={idx}
                                >{feature}</li>)
                            }
                        </div>
                        <p><span className='text-gray-800 font-bold'>Area: </span>{area}</p>
                        <p><span className='text-gray-800 font-bold'>Price: </span>{price}</p>
                        <p><span className='text-gray-800 font-bold'>Location: </span>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;