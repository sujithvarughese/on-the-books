import classes from "./styles/DesktopNavbar.module.css"
import { HeaderLogo } from "../index.js";
import { NavLink } from "react-router-dom";
import { Auth } from "../../components"

const DesktopNavbar = ({ userLoggedIn }) => {

	return (
		<div className={classes.container}>

			<div className={classes.logo}>
				<HeaderLogo />
				<div className={classes.title}>
					<h1>On the Books</h1>
				</div>
			</div>



			<div className={classes.links}>
				{
					userLoggedIn &&
					<div className={classes.bookLinks}>
						<NavLink
							to="/library"
							className={({ isActive }) => [classes.link, isActive ? classes.active : undefined].join(" ") }
							end
						>
							My Library
						</NavLink>

						<NavLink
							to="/discover"
							className={({ isActive }) => [classes.link, isActive ? classes.active : undefined].join(" ") }
							end
						>
							Discover
						</NavLink>
					</div>
				}

				<Auth />
			</div>


		</div>
	);
};

export default DesktopNavbar;