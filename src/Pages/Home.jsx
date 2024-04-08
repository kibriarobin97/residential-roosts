import EstateCard from "../components/EstateCard/EstateCard";
import Slider from "../components/Slider/Slider";
import { useLoaderData } from "react-router-dom";

const Home = () => {

    const resident = useLoaderData()

    return (
        <div className="min-h-[calc(100vh-341px)]">
            <Slider></Slider>
            <div className="my-10">
                <h3 className="text-3xl font-bold text-center">Best Deals</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        resident.map(estate => <EstateCard
                            key={estate.id}
                            estate={estate}
                        ></EstateCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;