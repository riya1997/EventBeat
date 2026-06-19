import "./App.css";
import EventProvider from "./context/EventContext";
import EventCards from "./components/EventCards";

function App() {
  return (
    <EventProvider>
      <EventCards />
    </EventProvider>
  );
}

export default App;
