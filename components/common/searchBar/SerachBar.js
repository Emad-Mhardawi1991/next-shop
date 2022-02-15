import SearchIcon from "../icons/search-icon";
import classes from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <form className={classes.root}>
      <input className={classes.search_input} placeholder="Search for" />
      <button className={classes.search_icon_box}>
        <SearchIcon className={classes.search_icon} />
      </button>
    </form>
  );
};

export default SearchBar;
