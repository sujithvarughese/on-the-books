import classes from "./styles/MobileNavbar.module.css"
import { Fragment } from "react"
import { NavLink } from "react-router-dom";
import {Auth, HeaderLogo} from "../index.js";

const Navbar = ({ userLoggedIn }) => {

    return (
        <div className={classes.container}>

            <div className={classes.header}>
                <div>
                    <HeaderLogo />
                </div>

                <div>On the Books</div>
            </div>
            {
                userLoggedIn &&
                    <div className={classes.links}>
                        <NavLink
                            to="/library"
                            className={({ isActive }) => isActive ? `${classes.active} ${classes.link}` : `${classes.link}` }
                            end
                        >
                            Library
                        </NavLink>

                        <NavLink
                            to="/discover"
                            className={({ isActive }) => isActive ? `${classes.active} ${classes.link}` : `${classes.link}` }
                            end
                        >
                            Discover
                        </NavLink>
                    </div>
            }
            <Auth />
        </div>
    );
};

export default Navbar;