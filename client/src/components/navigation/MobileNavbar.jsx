import classes from "./styles/MobileNavbar.module.css"
import { Fragment } from "react"
import { NavLink } from "react-router-dom";

const MobileNavbar = ({ userLoggedIn }) => {

	return (
		<div className={classes.container}>
			{
				userLoggedIn ?
					<>
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
					</>
					:
					<>
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
					</>
			}
		</div>
	);
};

export default MobileNavbar;