import React from "react";
import Container from "../Container";
import Images from "../Images";
import myImg from "/src/assets/profile-pic (3).png";
import { FaRegQuestionCircle } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Banner = () => {
 

  return (
    <section className="bg-[#202020] md:py-30 relative">
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="w-[48%] text-center md:text-start">
            <h1 className="font-bold text-[60px] text-white pb-0.5">
              Hey! I'm Jaber
            </h1>
            <h2 className="text-3xl  text-white font-light font-montserrat pb-4 md:pb-0">
              <Typewriter
                options={{
                  strings: [
                    "A passionate Front-end Developer",
                    "From Bangladesh.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <p className="text-gray-400  text-sm md:text-lg font-light font-montserrat mt-7">
              I’m a Front-end Developer with a passion for creating interactive,
              responsive, and user-friendly web applications. Skilled in React,
              JavaScript, and modern CSS frameworks.
            </p>
          </div>
          <div className="w-[48%]">
            <Images srcImg={myImg} />
          </div>
        </div>
      </Container>
      <a
        href="#about"
        className="uppercase text-white text-[10px] font-light font-montserrat invisible md:visible [writing-mode:vertical-lr] rotate-180 absolute right-10 bottom-10 flex items-center gap-x-1"
      >
        about us <FaRegQuestionCircle className="rotate-80" />
      </a>
    </section>
  );
};

export default Banner;
