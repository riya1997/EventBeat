import { useEvent } from "../context/EventContext"; 
import { Link } from "react-router";

const EventCards = ({ id, title, date, location}) => {

    const { setSelectedId } = useEvent();

    return (
      <Link to={`/events/${id}`} onClick={() => setSelectedId(id)} >
        <div className="card border-2 border-gray-700 bg-base-100 image-full hover:cursor-pointer shadow-sm">
          <figure>
            <img 
              src={`https://picsum.photos/seed/${id}/500/300`}
              alt='random background picture'
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white text-2xl">{title}</h2>
            <p className="text-xl text-white"> {new Date(date).toLocaleDateString()}</p>
            <p className="text-xl text-white"> 
              <span className="flex items-center gap-2">
                <img 
              className="w-8"
              src='src/img/location_red.png' />
              {location}
              </span>
              </p>  
          </div>
        </div>
    </Link>
    );
};

export default EventCards;
