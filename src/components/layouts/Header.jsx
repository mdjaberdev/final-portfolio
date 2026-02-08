import React, { useState } from "react";
import Images from "../Images";
import logo from "/src/assets/logo.png";
import Container from "../Container";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-scroll";

const Header = () => {
  let [show, setShow] = useState(false);
  return (
    <section className="bg-[#202020] py-1 md:py-5">
      <Container>
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <div>
            <Images srcImg={logo} className="h-10 w-auto" />
          </div>

          {/* Mobile Icon */}
          <FaBars
            className="md:hidden text-white mr-1 text-xl"
            onClick={() => setShow(!show)}
          />
          {show && (
            <div
              className="fixed inset-0 z-50"
              onClick={() => setShow(false)}
            ></div>
          )}
          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex gap-x-10 text-white text-sm font-medium font-montserrat items-center">
              <li>
                <Link
                  to="/"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="myskills"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  My Skills
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          {show && (
            <ul className="absolute top-full z-50 right-3 bg-black p-3 rounded flex flex-col gap-5 text-white md:hidden">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Portfolio</a>
              </li>
              <li>
                <a href="#myskills">My Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Header;
