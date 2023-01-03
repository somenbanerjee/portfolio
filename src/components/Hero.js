import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import me from "../assets/me.jpeg";
import { motion } from "framer-motion";
import { variantHeroImage } from "../Utils/animations";
function Hero() {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      name="about"
      className="w-full py-28 dark:bg-black relative"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <motion.img
          class="w-14 h-14 rounded-full"
          src={me}
          variants={variantHeroImage}
          whileHover={{ scale: 1.2 }}
        />
        <h1 className="text-4xl sm:text-8xl font-bold text-black dark:text-white">
          Hello.
          <br /> <span className="text-primary">I am</span> Somen.{" "}
        </h1>

        <p className="font-light tracking-wide text-xl text-gray dark:text-gray-400 py-4">
          I’m a full-stack developer. Currently working at{" "}
          <a
            href="http://www.mailmantra.com/"
            className="underline decoration-solid"
          >
            Mail Mantra
          </a>{" "}
          , where I mostly use{" "}
          <span className="underline decoration-solid">LAMP</span> stack to
          build web application. But now I am more focused on JavaScript,
          specially in <span className="underline decoration-solid">MERN</span>{" "}
          stack.
        </p>
        <div className="flex flex-row justify-start">
          <button className="text-black dark:text-white shadow-primary dark:shadow-primary-dark group border-2 border-black dark:border-white px-6 py-3 my-2 flex items-center">
            Resume
            <span>
              <AiOutlineDownload className="ml-3 text-lg" />
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
