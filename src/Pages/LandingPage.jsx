import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <header className="w-full h-full max-w-6xl text-center p-8 mt-4 leading-none">
        <h1 className="text-[8vw] mb-4 text-[#8C51FC] uppercase tracking-wide font-extrabold">
          THE IMMERSIVE
          <br />
          TECH COMMUNITY
        </h1>
        {/* <h1 className="w-full text-[8vw] font-extrabold mb-4 text-[#8C51FC] uppercase tracking-wide"></h1> */}
        <p className="text-lg sm:text-xl text-gray-600 mb-6">
          Whether you're a seasoned professional or just starting out, our
          community provides the tools, resources, and connections to help you
          thrive in the tech world.
        </p>

        <Link
          to="/registrationform"
          className="bg-[#5C42F6] hover:bg-[#4a36d4] transition-all text-white px-6 py-3 capitalize rounded-full"
        >
          Join the Tribe
        </Link>
      </header>
    </div>
  );
};

export default LandingPage;
