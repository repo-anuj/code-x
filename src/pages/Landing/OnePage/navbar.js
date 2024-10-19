import React, { useState, useEffect } from "react";
import { Collapse, Container, NavbarToggler, NavLink } from "reactstrap";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";
import CareerPage from "./CareerPage";
// Import Images
import logodark from "../../../assets/images/logo-light.png";
import logolight from "../../../assets/images/logo-light.png";

const Navbar = () => {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const [navClass, setnavClass] = useState("");

  const toggle = () => setisOpenMenu(!isOpenMenu);

  useEffect(() => {
    window.addEventListener("scroll", scrollNavigation, true);
  });

  const [activeLink, setActiveLink] = useState();

  useEffect(() => {
    const activation = (event) => {
      const target = event.target;
      if (target) {
        target.classList.add("active");
        setActiveLink(target);
        if (activeLink && activeLink !== target) {
          activeLink.classList.remove("active");
        }
      }
    };
    const defaultLink = document.querySelector(".navbar li a.active");
    if (defaultLink) {
      defaultLink?.classList.add("active");
      setActiveLink(defaultLink);
    }
    const links = document.querySelectorAll(".navbar a");
    links.forEach((link) => {
      link.addEventListener("click", activation);
    });
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", activation);
      });
    };
  }, [activeLink]);

  function scrollNavigation() {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > 50) {
      setnavClass("is-sticky");
    } else {
      setnavClass("");
    }
  }

  return (
    <React.Fragment>
      <nav
        className={
          "navbar navbar-expand-lg navbar-landing fixed-top " + navClass
        }
        id="navbar"
      >
        <Container>
          <Link className="navbar-brand" to="/Landing">
            <img
              src={logodark}
              className="card-logo card-logo-dark"
              alt="logo dark"
              height="20"
            />
            <img
              src={logolight}
              className="card-logo card-logo-light"
              alt="logo light"
              height="20"
            />
          </Link>

          <NavbarToggler
            className="navbar-toggler py-0 fs-20 text-body"
            onClick={toggle}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="mdi mdi-menu"></i>
          </NavbarToggler>

          <Collapse
            isOpen={isOpenMenu}
            className="navbar-collapse"
            id="navbarSupportedContent"
          >
            <Scrollspy
              offset={-18}
              items={[
                "hero",
                "services",
                "features",
                "plans",
                "reviews",
                "team",
                "contact",
                "career",
              ]}
              currentClassName="active"
              className="navbar-nav mx-auto mt-2 mt-lg-0"
              style={{ color: "#4b38b3" }}
              id="navbar-example"
            >
              <li className="nav-item">
                <NavLink className="fs-14 active" href="#hero">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="fs-14" href="#services">
                  Features
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="fs-14" href="#features">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="fs-14" href="#plans">
                  Plans
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="fs-14" href="#reviews">
                  Reviews
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="fs-14" href="#team">
                  Team
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="fs-14" href="#contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <Link to="/CareerPage">
                  <NavLink className="fs-14">Career</NavLink>
                </Link>
              </li>
            </Scrollspy>

            <div className="">
              <Link
                to="/login"
                className="btn btn-primary btn-link fw-medium text-decoration-none text-body"
              >
                Sign in
              </Link>
            </div>
          </Collapse>
        </Container>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
