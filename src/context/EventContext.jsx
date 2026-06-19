import { createContext, useEffect, useState, useContext } from "react";

const EventContext = createContext();
export default function EventProvider({ children }) {
  const [events, setEvents] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  useEffect(() => {
    fetch("http://localhost:4001/api/events")
      .then((res) => res.json())
      .then((json) => {
        setEvents(json.results);
        setDataIsLoaded(true);
      });
  }, []);

  return (
    <EventContext.Provider value={{ events }}>{children}</EventContext.Provider>
  );
}
export function useEvent() {
  return useContext(EventContext);
}
