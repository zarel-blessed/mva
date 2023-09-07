import Wrapper from "./Wrapper";
import { FaGithub, FaInstagram, FaTwitter, FaDribbble } from "react-icons/fa";
import "../scss/Footer.scss";

const Footer = () => {
  return (
    <footer>
      <Wrapper>
        <div className="wrapper">
          <div className="socials">
            <FaGithub className="icon" />
            <FaInstagram className="icon" />
            <FaDribbble className="icon" />
            <FaTwitter className="icon" />
          </div>
          <div className="links">
            <ul>
              <li>About MVA</li>
              <li>Community</li>
              <li>About the developer</li>
              <li>Contribute</li>
            </ul>
            <ul>
              <li>Terms of use</li>
              <li>Search Guide</li>
              <li>Other Databases</li>
              <li>Join us</li>
            </ul>
            <ul>
              <li>Go to Portfolio</li>
              <li>Fiverr</li>
              <li>LinkedIn</li>
              <li>Buy me a coffee</li>
            </ul>
          </div>
          <div className="copyright">
            All rights reserved &copy;2023 Shaheer
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
