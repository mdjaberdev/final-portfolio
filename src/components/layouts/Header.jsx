import React from "react";
import Images from "../Images";
import logo from "/src/assets/logo.png";
import Container from "../Container";

const Header = () => {
  return (
    <div className="bg-[#202020] py-5">
      <Container>
        <div className="flex justify-between">
          <div className="">
            <Images srcImg={logo} />
          </div>
          <nav>
            <ul className="flex gap-x-6.25">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Header;
