import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FiArrowDownRight } from "react-icons/fi";

const teamMembers = [
  {
    job: "CEO",
    name: "Eliza",
    image: "/public/Adele-1.webp",
  },
  {
    job: "CTO",
    name: "Eric",
    image: "/public/Eric-1.webp",
  },
  {
    job: "Lead Developer",
    name: "Jessica",
    image: "/public/Jessica-1.webp",
  },
  {
    job: "Project Manager",
    name: "Ryan",
    image: "/public/Ryan-1.webp",
  },
  {
    job: "UI/UX Designer",
    name: "Kristina",
    image: "/public/Kristina-1.webp",
  },
  {
    job: "Marketing Head",
    name: "Michael",
    image: "/public/Component-2.webp",
  },
  {
    job: "QA Engineer",
    name: "Nicole",
    image: "/public/Nicole-1.webp",
  },
];

const AboutUs = () => {
  const imageRefs = useRef([]);

  useEffect(() => {
    gsap.to(imageRefs.current, {
      opacity: 0,
    });
  }, []);

  const handleMouseEnter = (index) => {
    gsap.to(imageRefs.current[index], {
      opacity: 1,
      duration: 0.3,
      scale: 1.2,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(imageRefs.current[index], {
      opacity: 0,
      scale: 1,
      duration: 0.3,
      ease: "power1.out",
    });
  };

  return (
    <div className="max-w-full mx-auto px-4 py-12 overflow-hidden">
      <section className="w-full flex items-end justify-between mb-12 p-5">
        <h1 className="sm:text-[9vw] text-8xl font-bold uppercase text-white mb-4">
          WHO WE ARE
        </h1>
        <FiArrowDownRight className="text-white text-5xl sm:text-6xl sm:mr-16 mr-4 font-extrabold" />
      </section>

      <img
        src="/2022-Team-Photo.webp"
        alt="Tech Tribe"
        className="w-full h-full object-cover mb-6"
      />

      <section className="flex flex-col gap-5 sm:flex-row justify-between capitalize items-center mb-12 p-8">
        <h2 className="sm:text-7xl text-6xl mb-6 font-bold text-white">
          We are the <br /> tech innovators.
        </h2>
        <p className="text-lg text-gray-300 max-w-lg">
          At Tech Tribe, we believe in the power of community and collaboration.
          Together, we unlock the potential of every member, fostering an
          environment where ideas flourish and innovation thrives. Join us as we
          shape the future of technology!
        </p>
      </section>

      <section className="w-full flex flex-col items-center justify-center">
        <div className="members flex flex-col w-full p-5">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-white about hover:bg-white hover:text-black transition-all
              flex items-center justify-between p-5 border-white
              border-t-2 border-b-2 py-4 gap-10 relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onTouchStart={() => handleMouseEnter(index)}
              onTouchEnd={() => handleMouseLeave(index)}
            >
              <h2 className="text-lg capitalize font-semibold">{member.job}</h2>
              <h1 className="sm:text-6xl text-4xl capitalize text-start">
                {member.name}
              </h1>
              <img
                ref={(el) => (imageRefs.current[index] = el)}
                src={member.image}
                alt={member.name}
                className="w-32 h-auto object-cover absolute left-20 sm:left-52 transition-opacity duration-300"
                style={{ opacity: 0 }}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="text-end mr-5 mt-12 flex flex-col gap-5">
        <h2 className="text-5xl font-bold text-white">Established in</h2>
        <h3 className="text-9xl font-bold text-white">2023</h3>
        <p className="text-lg text-gray-300 mt-4">
          We are proud to have built a vibrant community dedicated to innovation
          and collaboration. Join us on our journey!
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
