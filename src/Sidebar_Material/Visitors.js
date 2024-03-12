import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [visitorid , setvisitorid] = useState();

  // const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/visitor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name , number , visitorid }),
      });
      const data = await response.json();
      console.log("Signup successful:", data);
      // navigate('/login')
      // Clear form fields after successful signup
      setname("");
      setnumber("");
      setvisitorid("")

    } catch (error) {
      console.error("Error signing up:", error);
      // Handle signup error here
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-yellow-50">
      <div className="z-10 max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Visitor   
          </h2>
        </div>
        <form onSubmit={handleSignUp} className="space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:border-gradient"
              placeholder="Name"
            />
          </div>
          <div>
            <label htmlFor="number" className="sr-only">
             Mobile-Number
            </label>
            <input
              type="number"
              id="number"
              name="number"
              autoComplete="new-number"
              value={number}
              onChange={(e) => setnumber(e.target.value)}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:border-gradient"
              placeholder="Number"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Visitor-ID
            </label>
            <input
              type="number"
              id="number"
              name="number"
              autoComplete="new-number"
              value={visitorid}
              onChange={(e) => setvisitorid(e.target.value)}
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm focus:border-gradient"
              placeholder="Visitor ID"
            />
          </div>

          {/* Add more input fields here as needed */}
          
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
