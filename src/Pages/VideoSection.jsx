import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectionData = [
  {
    title: "Networking",
    content:
      "The Tech Tribe community serves as a vibrant networking hub for tech enthusiasts, professionals, and newcomers alike. It facilitates meaningful connections among members, enabling them to share ideas, collaborate on projects, and access mentorship opportunities.",
  },
  {
    title: "Community",
    content:
      "Our community encourages collaboration and support among members, fostering an environment where everyone can thrive and learn from each other.",
  },
  {
    title: "Collaboration",
    content:
      "We believe in the power of collaboration, bringing together diverse skills and perspectives to create innovative solutions and projects.",
  },
  {
    title: "Opportunities",
    content:
      "Members can access various opportunities, including mentorship, job openings, and collaborations on exciting projects.",
  },
];

function VideoSection() {
  const textRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const textAnimation = gsap.fromTo(
      textRef.current,
      { x: isMobile ? 100 : 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 100%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    const videoAnimation = gsap.fromTo(
      videoRef.current,
      { x: isMobile ? -100 : -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 60%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );

    return () => {
      textAnimation.kill();
      videoAnimation.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden h-full flex items-start justify-center video-section">
      <div className="max-w-6xl h-full mx-auto flex flex-col md:flex-row">
        <div
          className="relative h-[70vh] w-full md:w-1/2 lg:h-[80vh] lg:max-w-lg
         video-container flex justify-center items-start"
          ref={videoRef}
        >
          <video className="w-full h-full object-contain" autoPlay muted loop>
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div
          className="w-full p-6 text-white relative z-2 bg-transparent overflow-hidden
         h-full flex flex-col items-start"
          ref={textRef}
        >
          {sectionData.map((section, index) => (
            <section key={index} className="mb-16 text-start">
              <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-4">
                {section.title}
              </h2>
              <p className="text-sm mt-2 w-fit">{section.content}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
