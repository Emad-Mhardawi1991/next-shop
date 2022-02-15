import Link from "next/link";
import { useState } from "react";
import Avatar from "../avatar/Avatar";
import classes from "./navDropDown.module.css";

const NavDropDown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuHandler = (e) => {
    setIsOpen(!isOpen);
  };
  return (
    <div  className={classes.root}>
      <button onClick={menuHandler}>
        <Avatar />
      </button>

      {isOpen && (
        <div className={classes.dropDown_menu}>
          <Link href="/Profile">
            <a>Profile</a>
          </Link>
          <button>Log Out</button>
        </div>
      )}
    </div>
  );
};

export default NavDropDown;
