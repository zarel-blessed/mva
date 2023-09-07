import Wrapper from "./Wrapper";
import logo from "../assets/mva-logo.png";
import Image from "./Image";
import { FaSearch } from "react-icons/fa";
import "../scss/Header.scss";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, [window.scrollY]);

  return (
    <header
      style={{
        backgroundColor: scrolled ? "var(--clr-primary)" : "rgba(0, 0, 0, 0.2)",
      }}
    >
      <Wrapper>
        <section className="header">
          <Image src={logo} alt="Logo" width="80px" />
          <FaSearch className="icon" />
        </section>
      </Wrapper>
    </header>
  );
};

export default Header;
