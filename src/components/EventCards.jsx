import { useEvent } from "../context/EventContext";
const EventCards = () => {
  const { events } = useEvent();
  return (
    <div>
      {events.map((event) => (
        <div key={event.id}>
          <h3>{event.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default EventCards;
