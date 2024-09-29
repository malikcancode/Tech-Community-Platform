import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success("Subscribed successfully!", {
      position: "top-right",
      autoClose: 2000,
      closeOnClick: true,
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-2">Community</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="/about-us" className="hover:underline text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:underline text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Social</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="/blog" className="hover:underline text-sm">
                  FaceBook
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:underline text-sm">
                  Instagram
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:underline text-sm">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Newsletter</h2>
            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 mb-2 rounded-lg text-gray-900 text-sm"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white text-sm
                font-semibold py-2 px-4 w-full sm:w-full rounded-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} TechTribe Community. All rights
            reserved.
          </p>
        </div>
      </div>

      <ToastContainer />
    </footer>
  );
};

export default Footer;
