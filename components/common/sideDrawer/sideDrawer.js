import Link from 'next/link';
import Logo from '../../ui/logo/logo';
import ArrowRightIcon from '../icons/arrow-right-icon';
import classes from './sideDrawer.module.css'


const SideDrawer = (props) => {
  return <div className={ ` ${classes.root} ` }>
    <div className={classes.sideDrawer_header}>
      <button onClick = {props.openMenu}>
        <ArrowRightIcon className={classes.arrow}/>
      </button>
      <Logo className={classes.logo}/>
    </div>
    
    <ul className={classes.nav_Links}>
          <li onClick={props.openMenu }>
            <Link href='/'>Home</Link>
          </li>
          <li onClick={props.openMenu }>
            <Link href='/about'>About</Link>
          </li>
          <li onClick={props.openMenu }>
            <Link href='/find-us'>Find Us</Link>
          </li>
          <li onClick={props.openMenu }>
            <Link href='/blog'>Blog</Link>
          </li>
        </ul>
    
  </div>;
};

export default SideDrawer;
