// import Registration
// import Login
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router";

const Navbar = () => {
  const { isAuthenticated, logOut } = useAuth();
  // const navigate = useNavigate();
  //     const handleCreateEvent = () => {
  //     const token = localStorage.getItem("token");

  //     if (token) {
  //       navigate("/createevent");
  //     } else {
  //       alert("Please login to create an event.");
  //     }
  //   };
  return (
    <header className="absolute top-0 bg-transparent w-full h-20 z-50 mx-auto">
      <nav className="max-w-screen flex flex-col md:flex-row items-start md:items-end justify-around mx-auto p-4">
        <Link to="/" className="flex flex-row gap-3">
          <img
            className="w-10"
            src="/src/img/heartbeat_logo.png"
            alt="logo of a heartbeat pulse in a cirle"
          />
          <span className=" text-[#150046] text-3xl font-bold tracking-tight">
            EventBeat
          </span>
        </Link>
        <Link to="/createevent">
          <button className="mt-4 p-3 rounded-full bg-black font-semibold hover:bg-pink-500 text-white hover:cursor-pointer hover:shadow-xl">
            Create Event
          </button>
        </Link>
        <div className="flex items-end gap-5">
          {isAuthenticated ? (
            <button
              className="mt-4 bg-pink-500 text-white font-semibold hover:shadow-2xl hover:bg-white hover:text-pink-500 p-3 rounded-full"
              onClick={logOut}
            >
              Log out
            </button>
          ) : (
            <>
              <Link to="/registration">
                <button className="mt-4  p-3 rounded-full bg-black font-semibold text-white hover:bg-pink-500 hover:cursor-pointer hover:shadow-xl">
                  Sign up
                </button>
              </Link>
              <Link
                to="/login"
                className=" hover:text-white hover:underline transition duration-200 pb-2 font-semibold"
              >
                {" "}
                Already registerd? Log in here
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
