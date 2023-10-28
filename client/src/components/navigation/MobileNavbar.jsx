import classes from "./styles/MobileNavbar.module.css"
import { Fragment } from "react"
import { NavLink } from "react-router-dom";

const MobileNavbar = ({ userLoggedIn }) => {

	return (
		<Fragment>
			{
				userLoggedIn ?
					<div className={classes.navbar}>
						<NavLink
							to="/library"
							className={({ isActive }) => isActive ? `${classes.active} ${classes.link}` : `${classes.link}` }
							end
						>
							My Library
						</NavLink>

						<NavLink
							to="/discover"
							className={({ isActive }) => isActive ? `${classes.active} ${classes.link}` : `${classes.link}` }
							end
						>
							Discover
						</NavLink>



					</div>
					:
					<div className={classes.navbar}>

						<NavLink
							to="/login"
							className={({ isActive }) => isActive ? `${classes.active} ${classes.link}` : `${classes.link}` }
						>
							Login
						</NavLink>


						<NavLink
							to="/register"
							className={({ isActive }) => isActive ? `${classes.active} ${classes.link}` : `${classes.link}` }
						>
							Register
						</NavLink>


					</div>
			}
		</Fragment>
	);
};

export default MobileNavbar;