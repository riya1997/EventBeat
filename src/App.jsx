import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import AuthProvider from "./context/AuthContext";
import EventDetails from "./pages/EventDetails";
import NotFound from "./pages/NotFound";
import { EventProvider }  from "./context/EventContext";
import CreateEvent from "./pages/CreateEvent";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <AuthProvider>
        <EventProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/events/:id" element={<EventDetails />} />
                <Route element={<ProtectedRoute />} >
                    <Route path='/createevent' element={<CreateEvent />} />
                </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </EventProvider>
      </AuthProvider>
    </div>
  );
}

export default App;

{
  /* <Route path="/events/:id" element={<EventDetails />} /> */
}
