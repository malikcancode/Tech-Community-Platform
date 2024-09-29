import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full sm:max-w-6xl mx-auto p-4 border border-gray-300 rounded-full flex items-center justify-between mt-8 bg-black">
      <div className="text-xl font-bold text-white flex items-center justify-center gap-4">
        <Link to="/">
          <img className="w-[40px]" src="/fav.png" alt="Tech Tribe Logo" />
        </Link>
        <h2>Tech Tribe</h2>
      </div>

      <nav className="hidden md:flex gap-8 text-white text-[14px] capitalize">
        <Link to="/" className="hover:text-[#5C42F6]">
          Home
        </Link>
        <Link to="/events" className="hover:text-[#5C42F6]">
          Events
        </Link>
        <Link to="/blog" className="hover:text-[#5C42F6]">
          Blog
        </Link>
        <Link to="/about-us" className="hover:text-[#5C42F6]">
          About Us
        </Link>
      </nav>
      <Link
        to="/registrationform"
        className="bg-[#5C42F6] hover:bg-[#4a36d4] transition-all text-white px-8
       p-3 tracking-wide sm:text-[1vw] text-[10px] rounded-full"
      >
        Join The Tribe
      </Link>
    </header>
  );
};

export default Header;
