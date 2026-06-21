import { useState } from "react";

const initialData = {
  email: "",
  password: "",
};
const Registration = () => {
  const [formData, setFormData] = useState(initialData);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const validate = () => {
    const newErrors = {};

    if (!formData.email || !formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email";
    }
    if (formData.password.length < 8) {
      newErrors.password = "Please enter a valid password";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return; // stop here, don't accept the submission
    }
    try {
      console.log(formData);
      const email = formData.email;
      const password = formData.password;

      if (!email) throw new Error("Email should not be blank ");
      if (!password) throw new Error("Password should not be blank ");

      const callApi = async () => {
        const response = await fetch("http://localhost:3001/api/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();

        if (response.ok) {
          alert("Registration successful!");
          console.log(data);
          window.location.href = "/login";
        } else {
          setError(data.error);
          alert(data.error || "Registration failed");
        }
      };
      callApi();
      setFormData(initialData);
      setError({});
    } catch (error) {
      setError(error.message);
      // alert(error);
    }
  };
  return (
    <div className="max-w-100 mx-auto mt-30 p-5 pl-10 border-[3px] border-black font-sans rounded-2xl">
      <div className="">
        <form onSubmit={handleSubmit}>
          <h1 className="font-bold text-3xl mb-5">Registration Form</h1>

          <label>
            Email:
            <br />
            <input
              type="email"
              name="email"
              value={formData.email}
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
              value={formData.password}
              onChange={handleChange}
              className="w-full h-9 mt-1 border border-black"
            ></input>
          </label>
          {error.password && <p style={{ color: "red" }}>{error.password}</p>}
          <br />
          <br />
          <button
            type="submit"
            className="w-20 py-2 bg-gray-800 text-white hover:bg-gray-400 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
