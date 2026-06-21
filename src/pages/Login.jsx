import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router";

const Login = () => {
  const { isAuthenticated, loginAction } = useAuth();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const validate = () => {
    const newErrors = {};

    if (!input.email || !input.email.includes("@")) {
      newErrors.email = "Please enter a valid email";
    }
    if (input.password.length < 8) {
      newErrors.password = "Please enter a valid password";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setError(errors);
      return; // stop here, don't accept the submission
    }

   loginAction(input);
    setInput({
      email: "",
      password: "",
    });
    setError({});
    //}
  };
   if (isAuthenticated) return <Navigate to='/' />; // Redirection back to Homepage after succesful log in (Toni)

  return (
    <div className="max-w-100 mx-auto mt-30 p-5 pl-10 border-[3px] border-black font-sans rounded-2xl">
      <form onSubmit={handleSubmit}>
        <h1 className="font-bold text-3xl mb-5">Login</h1>

        <label>
          Email:
          <br />
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
            className="w-full h-9 mt-1 border border-black"
          ></input>
        </label>
        {error.email && <p style={{ color: "red" }}>{error.email}</p>}
        <br />
        <br />
        <label>
          Password:
          <br />
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
            className="w-full h-9 mt-1 border border-black"
          ></input>
        </label>
        {error.password && <p style={{ color: "red" }}>{error.password}</p>}
        <br />
        <br />
        <button
          type="submit"
          className="w-20 py-2 bg-gray-800 text-white rounded hover:bg-gray-400"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
