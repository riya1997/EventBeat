import { Link } from "react-router";
import { useAuth } from "../context/AuthContext";

const Hero = () => {

    const { isAuthenticated } = useAuth();

    return (
        <div className="relative bg-center bg-[url(./img/pexels-annamw-1047442.jpg)] h-screen bg-no-repeat bg-cover ">
            <div className="relative z-40 text-center pt-50">
                <h1  className="text-5xl md:text-6xl text-white font-bold"> Welcome to <br></br>
                    <p className="text-5xl md:text-8xl text-white font-bold">EventBeat</p></h1>
                <h2 className="text-3xl md:text-4xl mb-10 text-white font-semibold"> You can look for cool events or post an event yourself</h2>

            <div> { isAuthenticated? (
                 <Link to='/createevent' >
			<button className='mt-4 border-2 border-white p-3 bg-white text-pink-500 font-bold rounded-full text-xl hover:cursor-pointer hover:border-pink-500 hover:bg-pink-500  hover:text-white hover:shadow-xl transition duration-200 mx-5 '>Create Event</button>
			</Link> ) : (
                <>
            <Link to='/registration' >
			<button className='mt-4 border-2 border-white p-3 bg-white text-pink-500 font-bold rounded-full text-xl hover:cursor-pointer hover:border-pink-500 hover:bg-pink-500  hover:text-white hover:shadow-xl transition duration-200 mx-5 '>Sign up</button>
			</Link>
            <Link to='/createevent' >
			<button className='mt-4 border-2 border-white p-3 bg-white text-pink-500 font-bold rounded-full text-xl hover:cursor-pointer hover:border-pink-500 hover:bg-pink-500  hover:text-white hover:shadow-xl transition duration-200 mx-5 '>Create Event</button>
			</Link>
            </>
            )}
            </div>
         </div>
        </div>
    );
};

export default Hero;