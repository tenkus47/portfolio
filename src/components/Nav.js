import React, { useEffect, useState } from "react";
import "./style/Nav.css";
import flag from "../static/flag.png";
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import profileImage from "../static/myInfo/profile.jpg";

import { Link } from "react-router-dom";

function Nav() {
  const [open, setOpen] = useState(false);
  const [classs, setClass] = useState("activemenu");
  useEffect(() => {
    if (open === false) setClass("inactivemenu");
    else {
      setClass("activemenu");
    }
  }, [open]);
  return (
    <div className="Navbar flex flex-row items-center">
      <div className=" md:hidden cursor-pointer" onClick={() => setOpen(true)}>
        <MenuIcon />
      </div>
      <Link to="/portfolio">
        <div className="flex items-center font-bold uppercase text-center md:pb-0 lg:ml-20 ">
          <img
            src={profileImage}
            alt="profile"
            className="mr-5 rounded-full h-10 w-10 object-cover ml-10"
          />
          Tenzin Kunsang
        </div>
      </Link>
      <div className="Options cursor-pointer md:flex-grow hidden md:block ">
        <ul className="flex justify-end mr-20">
          <li className="active item w-100" onClick={() => setOpen(false)}>
            <Link to="/subscribe"> Subscribe</Link>
          </li>

          <li className="translate">
            <img src={flag} alt="flag" />
            En
          </li>

          <Link to="/contact">
            {" "}
            <li className="Contact font-bold mr-2">
              <ContactPhoneIcon className="mr-2" style={{ fontSize: 15 }} />
              Contact
            </li>
          </Link>
        </ul>
      </div>
      <div
        className={` md:hidden hiddenMenu bg-blue-600 flex flex-col justify-center items-center uppercase text-white  bg-opacity-90  ${classs}`}
      >
        <ClearIcon
          className="absolute bg-black rounded-full p-1 top-4 left-4 font-bold cursor-pointer hover:text-red-500"
          onClick={() => setOpen(false)}
        />
        <h1 className="text-3xl font-bold cursor-pointer ">
          <Link to="/portfolio" onClick={() => setOpen(false)}>
            {" "}
            Home
          </Link>
        </h1>
        <br />
        <h1 className="text-3xl font-bold cursor-pointer  ">
          <Link to="/contact" onClick={() => setOpen(false)}>
            {" "}
            Contact
          </Link>
        </h1>
        <br />
        <p
          className="text-3xl font-bold  cursor-pointer"
          onClick={() => setOpen(false)}
        >
          <Link to="/subscribe"> Subscribe</Link>
        </p>
      </div>
    </div>
  );
}

export default Nav;
