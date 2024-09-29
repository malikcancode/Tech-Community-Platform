import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonialsData = [
  {
    name: "Alice Johnson",
    feedback: "This service was fantastic! Highly recommend to everyone.",
    image: "https://randomuser.me/api/portraits/women/1.jpg", // Random person image
  },
  {
    name: "Bob Smith",
    feedback:
      "A wonderful experience from start to finish. Will come back for sure!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Charlie Brown",
    feedback: "Exceptional quality and outstanding support. Very satisfied!",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "David Wilson",
    feedback:
      "I was impressed by the professionalism and dedication of the team.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Eve Davis",
    feedback: "Great value for money. I am extremely happy with the results!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Frank Thompson",
    feedback: "Amazing service! I will definitely be using this again.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

function Testimonials() {
  const videoRef = useRef();

  useEffect(() => {
    const videoElement = videoRef.current;
    gsap.fromTo(
      videoElement,
      { scale: 0.5, filter: "blur(0px)" },
      {
        scale: 1,
        duration: 1,
        filter: "blur(4px)",
        scrollTrigger: {
          trigger: videoElement,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="p-8 testimonials-section overflow-hidden relative mt-10">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-contain"
      >
        <source src="/public/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="w-full h-full flex flex-col items-center justify-center relative p-8 rounded-lg">
        <h2
          className="text-center mb-9 text-xl sm:text-5xl uppercase font-extrabold
         text-white"
        >
          Discover what community members are saying
        </h2>
        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-[5rem]">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur-lg border border-white/30
               p-4 rounded-lg shadow-lg transition-all duration-300 ${
                 index === 1 ? "lg:h-80" : "lg:h-48"
               }`}
              style={{ boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)" }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="font-semibold text-sm text-center text-white">
                {testimonial.name}
              </h3>
              <p className="text-gray-300 text-sm mt-2 text-center">
                {testimonial.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
