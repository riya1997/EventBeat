//Home page
import EventCards from '../components/EventCards';
import { useEvent } from '../context/EventContext';
import Hero from '../components/Hero';


const Home = () => {

    const { events = [], dataIsLoaded, error } = useEvent();

      const sortedEvents = [...events].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
     );

    if (!dataIsLoaded) return <p>Loading events...</p>;
    if (error) return <p>Something went wrong: {error} </p>;

    return (
        <>
        
          <Hero />
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 w-full bg-black p-12">
                {sortedEvents.map((event) => (
                <EventCards key={event.id} {...event} />
                ))}
            </div>
        </>
    );
};

export default Home;


  