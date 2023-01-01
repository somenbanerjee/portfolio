import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { variantContacts, variantContactsBottom } from "../Utils/animations";

function Contacts() {
  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
      name="contacts"
      className="w-full py-28 dark:bg-black"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-6xl font-bold text-black dark:text-white">
          Contacts.
        </h1>
        <p className="font-light tracking-wide text-xl text-gray dark:text-gray-400 py-4">
          My social links
        </p>
        <div className="container mx-auto py-6">
          <div className="flex flex-col justify-start">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div>
                <motion.div
                  variants={variantContacts}
                  class="antialiased text-black dark:text-white pb-4"
                >
                  <a href="github">
                    <div class="flex items-center flex-wrap space-x-4">
                      <MdEmail className="text-4xl" />
                      <div class="min-w-0 flex-auto space-y-1">
                        <h2 class="">Email</h2>
                        <p class="text-gray font-light">
                          somen.banerjee0@gmail.com
                        </p>
                      </div>
                    </div>
                  </a>
                </motion.div>
                <motion.div
                  variants={variantContacts}
                  class="antialiased text-black dark:text-white pb-4"
                >
                  <a href="https://github.com/somenbanerjee" target="_BLANK">
                    <div class="flex items-center flex-wrap space-x-4">
                      <FaGithub className="text-3xl" />
                      <div class="min-w-0 flex-auto space-y-1">
                        <h2 class="">Github</h2>
                        <p class="text-gray font-light">//somenbanerjee</p>
                      </div>
                    </div>
                  </a>
                </motion.div>
                <motion.div
                  variants={variantContacts}
                  class="antialiased text-black dark:text-white pb-4"
                >
                  <a
                    href="https://www.linkedin.com/in/somenbanerjee"
                    target="_BLANK"
                  >
                    <div class="flex items-center flex-wrap space-x-4">
                      <FaLinkedin className="text-3xl" />
                      <div class="min-w-0 flex-auto space-y-1">
                        <h2 class="">LinkedIn</h2>
                        <p class="text-gray font-light">//somenbanerjee</p>
                      </div>
                    </div>
                  </a>
                </motion.div>
                <motion.div
                  variants={variantContactsBottom}
                  class="antialiased text-black dark:text-white pb-4"
                >
                  <a href="https://twitter.com/somenb6" target="_BLANK">
                    <div class="flex items-center flex-wrap space-x-4">
                      <FaTwitter className="text-3xl" />
                      <div class="min-w-0 flex-auto space-y-1">
                        <h2 class="">Twitter</h2>
                        <p class="text-gray font-light">//somenb6</p>
                      </div>
                    </div>
                  </a>
                </motion.div>
              </div>
              <div>
                {/* <img src={logo} className="opacity-25 grayscale" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contacts;
