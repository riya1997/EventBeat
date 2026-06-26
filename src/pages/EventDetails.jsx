import { useEvent } from "../context/EventContext";
import { useParams } from "react-router";
import { useEffect } from "react";
import { Link } from "react-router";

const EventDetails = () => {
    const { id } = useParams();
    const { eventDetail, error, setSelectedId } = useEvent();

    useEffect(() => {
        setSelectedId(id);

        return () => {
            setSelectedId(null);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    if (error) return <p>Something went wrong: {error}</p>;
    if (!eventDetail) return <p>Loading event details...</p>;

    return (
        <div className=" bg-linear-to-b from-[#d4f0ff] via-blue-700  to-gray-900 min-h-screen flex flex-col items-center">
            <div className="pt-50"> 
                <div className="bg-white w-fit p-10 rounded-2xl mx-auto mt-40 border-[3px] border-black">
                    <h1 className="text-3xl font-bold tracking-wide  text-blue-700 mb-2">{(eventDetail.title).toUpperCase()}</h1>
                    <p className="text-2xl font-semibold mb-4">{new Date(eventDetail.date).toLocaleDateString()}</p>
                    <p className="text-xl font-semibold mb-4"> {eventDetail.description}</p>
                    <p className="font-semibold pl-13">{eventDetail.location}</p>
                    <p className=" text-red-700"> 
                    <span className="flex items-center gap-2">
                <img 
              className="w-11"
              src='/src/img/location_red.png' />
              latitude: {eventDetail.latitude}
              </span>
              </p>
                <p className="pl-13 text-red-700">longitude: {eventDetail.longitude} </p>
                </div>
            </div>   
            <Link to='/' >
			<button className='mt-15 font-semibold  p-3 rounded-full bg-black text-white hover:bg-blue-700  hover:shadow-sm'> Back to Homepage</button>
            </Link>         
        </div>
    );
};

export default EventDetails;