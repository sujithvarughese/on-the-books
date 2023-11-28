import classes from "./styles/Auth.module.css"
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext.jsx";
import {Fragment} from "react";

const Auth = () => {

	const { user, logout } = useGlobalContext()

	return (
		<Fragment>

			{
				user ?
					<div className={classes.auth}>
						<div className={classes.link} onClick={logout}>
							Logout
						</div>
					</div>

					:

					<div className={classes.auth}>

						<NavLink
							to="/login"
							className={({ isActive }) => isActive ? classes.active : classes.link}
							end
						>
							Login
						</NavLink>
						<NavLink
							to="/register"
							className={({ isActive }) => isActive ? classes.active : classes.link }
							end
						>
							Register
						</NavLink>


					</div>

			}



		</Fragment>
	);
};

export default Auth;