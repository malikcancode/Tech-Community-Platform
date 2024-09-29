import { motion } from "framer-motion";

const splitTextToWords = (text) => text.split(" ");

const TextReveal = () => {
  const text =
    "The Tech Tribe community connects tech enthusiasts worldwide, fostering collaboration on innovative projects. Whether you're a developer, designer, or entrepreneur, we provide the tools to help you grow and succeed in the evolving tech landscape.";
  const words = splitTextToWords(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    reveal: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    reveal: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center capitalize relative">
      <motion.div
        className="reveal text-2xl sm:text-3xl tracking-wide font-bold text-[#C757DC] flex flex-wrap gap-2 max-w-5xl mx-auto p-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="reveal"
        viewport={{ once: false, amount: 0.5 }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default TextReveal;
