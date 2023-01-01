import {
  SiJavascript,
  SiCodeigniter,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";
import {
  FaReact,
  FaPhp,
  FaNodeJs,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { motion } from "framer-motion";
import { variantSkills } from "../Utils/animations";
function Skills() {
  const skills = [
    {
      name: "JavaScript",
      icon: <SiJavascript />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "NodeJS",
      icon: <FaNodeJs />,
    },
    {
      name: "PHP",
      icon: <FaPhp />,
    },
    {
      name: "CodeIgniter",
      icon: <SiCodeigniter />,
    },
    {
      name: "Bootstarp",
      icon: <FaBootstrap />,
    },
    {
      name: "MySQL",
      icon: <DiMysql />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
    },
  ];

  return (
    <div name="skills" className="w-full py-28 dark:bg-black">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-6xl font-bold text-black dark:text-white">
          Skills.
        </h1>
        <p className="font-light tracking-wide text-xl text-gray dark:text-gray-400 py-4">
          Tech stacks 
        </p>
        <motion.div
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ staggerChildren: 0.1 }}
          className="container mx-auto py-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <motion.div
                className="flex justify-center flex-col md:flex-row text-xl font-light text-black dark:text-white border-2 border-black dark:border-white p-4 bg-gray-100 shadow-primary dark:shadow-primary-dark"
                variants={variantSkills}
              >
                <span className="text-3xl mx-2">{skill.icon}</span>
                {skill.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
