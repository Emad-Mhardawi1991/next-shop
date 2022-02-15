import Logo from "../../ui/logo/logo";
import SearchBar from "../searchBar/SerachBar";
import HeartIcon from "../icons/heart-icon";
import ShoppingBagIcon from "../icons/shopping-bag-icon";
import MenuIcon from "../icons/Menu-icon";
import classes from "./navbar.module.css";
import NavDropDown from "../navDropDown/navDropDown";
import Link from "next/link";
import Badge from "../shoping-cart-badge/badge";
const NavBar = (props) => {
  return (
    <nav className={classes.root}>
      <div className={classes.nav_container}>
        <Logo className={classes.logo} />
        <ul className={classes.nav_Links}>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/find-us">Find Us</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
        <div className={classes.search_bar_container}>
          <SearchBar className={classes.search_bar} />
        </div>

        <div className={classes.nav_right}>
          <Badge itemsCount={6}>
            <HeartIcon className="w-7 h-7 " />
          </Badge>

          <Badge itemsCount={2}>
            <ShoppingBagIcon className="w-7 h-7" />
          </Badge>
          <NavDropDown />
          <button onClick={props.openMenu}>
            <MenuIcon className={classes.menu_icon} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
