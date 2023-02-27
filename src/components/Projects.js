import { FaGithub, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";
import { variantProjects, variantProjectsBottom } from "../Utils/animations";
import image from "../assets/project1.jpeg";
let data = require("../assets/data/projects.json");
function Projects() {
  const products = data["products"];

  return (
    <div name="projects" className="w-full py-28 dark:bg-black">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-6xl font-bold text-black dark:text-white">
          Projects.
        </h1>
        <p className="font-light tracking-wide text-xl text-gray dark:text-gray-400 py-4">
          Here are some of my projects that I have worked on. For more please
          refer to my GitHub.
        </p>
        <div className="container mx-auto py-6">
          <div className="flex flex-row justify-start">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {products.map((product) => (
                <motion.div
                  initial={"offscreen"}
                  whileInView={"onscreen"}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ staggerChildren: 0.1 }}
                  className="antialiased text-black dark:text-white"
                >
                  <div>
                    <motion.img
                      variants={variantProjects}
                      src={image}
                      alt={product.name}
                      className="w-full object-cover object-center"
                    />
                    <motion.div
                      variants={variantProjectsBottom}
                      className="relative px-4 -mt-16"
                    >
                      <div className="bg-white dark:bg-black p-6 border-2 border-black dark:border-white shadow-primary dark:shadow-primary-dark">
                        <h4 className="mt-1 text-xl uppercase">
                          {product.title}
                        </h4>
                        <div className="mt-1 text-gray text-sm">
                          {product.description}
                        </div>
                        <div className="mt-4">
                          <div className="flex items-center gap-1 flex-wrap">
                            {product.techStacks.map((techStack) => (
                              <span className="border text-gray px-2 py-1 text-xs">
                                {techStack}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="mt-8">
                          <div className="flex flex-row-reverse gap-4 flex-wrap">
                            <a href="#">
                              <FaGithub className="text-xl hover:scale-125 hover:rotate-45" />
                            </a>
                            <a href="#">
                              <FaLink className="text-xl hover:scale-125 hover:rotate-45" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
