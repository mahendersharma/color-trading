import React, { useState } from "react";
import UserService from "../services/UserService";
const FormRegistration = () => {
  const [darkMode, setDarkMode] = useState(false);

  // State to capture form inputs
  const [name, setname] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState(""); // New state for userName
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null); // State to capture the avatar image file
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true); // Start loading state

    const formData = new FormData();
    formData.append("name", name);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("userName", userName);
    formData.append("phone", phone);
    formData.append("password", password);
    if (avatar) {
      formData.append("avatar", avatar); // Attach avatar if provided
    }

    try {
      const response = await UserService.registration(formData); // Assuming UserService supports file uploads
      const data = await response.json();
      console.log(data)
      if (response.ok) {
        // Handle successful registration
        alert("Registration successful");
      } else {
        setError(data.message || "Something went wrong");
      }
    } catch (err) {
      setError("Failed to connect to the server");
    } finally {
      setLoading(false); // End loading state
    }
  };

  // Check if all required fields are filled
  const isFormValid = name && lastName && email && phone && password && avatar;

  // Function to handle avatar file selection
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file); // Update avatar state with the selected file
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh]  px-5">
      <div className=" flex flex-col items-end justify-start  overflow-hidden mb-2 xl:max-w-3xl w-full">
        <div className="flex">
          <h3 className="text-white">Dark Mode : &nbsp;</h3>
          <label className="inline-flex relative items-center mr-5 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={darkMode}
              readOnly
            />
            <div
              onClick={() => setDarkMode(!darkMode)}
              className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
            ></div>
          </label>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className={`xl:max-w-3xl ${darkMode ? "bg-black" : "bg-white"} w-full p-5 sm:p-10 rounded-md`}
        encType="multipart/form-data" // Form must be of multipart type to support file uploads
      >
        <h1
          className={`text-center text-xl sm:text-3xl font-semibold ${darkMode ? "text-white" : "text-black"}`}
        >
          Register for a free account
        </h1>
        <div className="w-full mt-8">
          <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${
                  darkMode
                    ? "bg-[#302E30] text-white focus:border-white"
                    : "bg-gray-100 text-black focus:border-black"
                }`}
                type="text"
                placeholder="Your first name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
              />
              <input
                className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${
                  darkMode
                    ? "bg-[#302E30] text-white focus:border-white"
                    : "bg-gray-100 text-black focus:border-black"
                }`}
                type="text"
                placeholder="Your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <input
              className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${
                darkMode
                  ? "bg-[#302E30] text-white focus:border-white"
                  : "bg-gray-100 text-black focus:border-black"
              }`}
              type="text"
              placeholder="Choose a username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <input
              className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${
                darkMode
                  ? "bg-[#302E30] text-white focus:border-white"
                  : "bg-gray-100 text-black focus:border-black"
              }`}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${
                darkMode
                  ? "bg-[#302E30] text-white focus:border-white"
                  : "bg-gray-100 text-black focus:border-black"
              }`}
              type="tel"
              placeholder="Enter your phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${
                darkMode
                  ? "bg-[#302E30] text-white focus:border-white"
                  : "bg-gray-100 text-black focus:border-black"
              }`}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* Avatar Upload Field */}
            <div className="flex flex-col gap-3">
              <label className={`font-medium ${darkMode ? "text-white" : "text-black"}`}>
                Upload Avatar
              </label>
              <input
                type="file"
                className="w-full"
                accept="image/*"
                onChange={handleAvatarChange}
                required
              />
            </div>
            <button
              type="submit"
              className="mt-5 tracking-wide font-semibold bg-[#E9522C] text-gray-100 w-full py-4 rounded-lg hover:bg-[#E9522C]/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              disabled={!isFormValid || loading} // Disable button if form is invalid or loading
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8h8a8 8 0 11-16 0z"
                  ></path>
                </svg>
              ) : (
                <>
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Register</span>
                </>
              )}
            </button>
            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            <p className="mt-6 text-xs text-gray-600 text-center">
              Already have an account?{" "}
              <a href="/sign-in">
                <span className="text-[#E9522C] font-semibold">Login</span>
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormRegistration;
