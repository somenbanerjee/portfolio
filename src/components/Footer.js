import React, { useState } from "react";
function Footer() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div name="footer" className="w-full dark:bg-black">
      <div className="max-w-[1000px] mx-auto px-8 flex justify-center">
        <div class="tracking-wider text-sm font-light text-black dark:text-white h-10">
          &copy; Somen Banerjee - Source code on{" "}
          <a
            href="https://www.github.com/"
            className="text-primary"
            target="_BLANK"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
