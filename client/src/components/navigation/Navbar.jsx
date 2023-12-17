import classes from "./styles/Navbar.module.css"
import { NavLink } from "react-router-dom";
import {AuthLinks} from "../index.js";
import logo from "../../assets/images/logo.png";

const Navbar = ({ userLoggedIn }) => {

    return (
        <div className={classes.container}>

            <div className={classes.header}>
                <div className={classes.logo}>
                    {
                        userLoggedIn ?
                            <NavLink to="library">
                                <img className={classes.logo} src={logo} alt="logo" />
                            </NavLink>
                            :
                            <NavLink to="/">
                                <img className={classes.logo} src={logo} alt="logo" />
                            </NavLink>
                    }

                </div>
                <div className={classes.title}>On the Books</div>
            </div>
            {
                userLoggedIn &&
                    <div className={classes.links}>
                        <NavLink
                            to="/library"
                            className={({ isActive }) => isActive ? `${classes.active} ${classes.link}` : `${classes.link}` }
                        >
                            Library
                        </NavLink>

                        <NavLink
                            to="/discover"
                            className={({ isActive }) => isActive ? `${classes.active} ${classes.link}` : `${classes.link}` }
                        >
                            Discover
                        </NavLink>
                    </div>
            }
            <AuthLinks />
        </div>
    );
};

export default Navbar;