import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll";
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container`}>
      <div className="logo">
        <img src={logo} alt="" className="logo" />
        <h1>Home Wise Tutor</h1>
      </div>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-280} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} offset={-120} duration={500}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-305} duration={500}>
            Members
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-230}
            duration={500}
            className="btn"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
