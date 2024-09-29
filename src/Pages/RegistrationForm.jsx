import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../Auth/Auth";

const RegistrationForm = () => {
  const { setUser } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email address is invalid";
    if (!formData.password) errors.password = "Password is required";
    else if (formData.password.length < 6)
      errors.password = "Password must be at least 6 characters long";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setUser({ name: formData.name });
      toast.success(
        "Thank you for Joining TechTribe! Redirecting to your dashboard...",
        {
          position: "top-right",
          autoClose: 5000,
          style: {
            background: "black",
            color: "white",
          },
        }
      );

      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-full max-w-5xl gap-32 mx-auto p-8">
      <ToastContainer />
      <div className="sm:flex gap-24 mt-10 w-full h-full items-center justify-between">
        <div className="sm:w-[60%] w-full">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Password</label>
              <div className="flex items-center border border-white rounded">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 border-none outline-none"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="px-3 py-3 flex items-center text-white bg-white"
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-black" />
                  ) : (
                    <FaEye className="text-black" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
            >
              Join TechTribe
            </button>
          </form>
        </div>
        <div className="hidden sm:block w-[45%] relative">
          <video autoPlay loop muted className="w-full h-full object-contain">
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
