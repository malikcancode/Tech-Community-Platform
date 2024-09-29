import { motion } from "framer-motion";

function Marquee() {
  return (
    <>
      <div className="w-full py-20 rounded-tl-3xl rounded-tr-3xl">
        <div
          data-scroll
          data-scroll-speed="3"
          data-scroll-direction="verticall"
          className="text border-t-2 p-5 border-b-2 border-zinc-600 text-white
           flex overflow-hidden whitespace-nowrap"
        >
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className="text-[4vw] leading-none heading uppercase 
            font-semibold  pr-7"
          >
            TECHTRIBE COMMUNITY
          </motion.h1>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className="text-[4vw] heading leading-none uppercase 
            font-semibold pr-7"
          >
            TECHTRIBE COMMUNITY
          </motion.h1>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className="text-[4vw] leading-none heading uppercase
             font-semibold pr-7"
          >
            TECHTRIBE COMMUNITY
          </motion.h1>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className="text-[4vw] leading-none heading uppercase 
            font-semibold pr-7"
          >
            TECHTRIBE COMMUNITY
          </motion.h1>
          <motion.h1
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className="text-[4vw] leading-none heading uppercase 
            font-semibold pr-7"
          >
            TECHTRIBE COMMUNITY
          </motion.h1>
        </div>
      </div>
    </>
  );
}

export default Marquee;
