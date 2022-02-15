import { useState } from "react";
import BackDrop from "../../ui/backdrop/backDrop";
import NavBar from "../navbar/navbar";
import SideDrawer from "../sideDrawer/sideDrawer";
import classes from "./Layout.module.css";

const Layout = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuOpenHandler = () => {
    console.log(menuOpen);
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="h-screen  ">
      {menuOpen && <BackDrop />}
      <header>
        <NavBar openMenu={menuOpenHandler} />
        {menuOpen && <SideDrawer openMenu={menuOpenHandler} />}
      </header>
      <main className="  pt-36 md:pt-20 max-w-screen-2xl h-full m-auto">{props.children}
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
};

export default Layout;
