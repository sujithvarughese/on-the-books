import classes from "../components/navigation/styles/Navbar.module.css"
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext.jsx";
import {Fragment} from "react";
import ButtonPlain from "../ui/ButtonPlain.jsx";

const credentials = {
	email: import.meta.env.VITE_ADMIN_LOGIN,
	password: import.meta.env.VITE_ADMIN_PASSWORD
}
const Auth = () => {

	const { user, logout, login } = useGlobalContext()

	const previewAsAdmin = () => {
		login(credentials)
	}

	return (
		<Fragment>
			{
				user ?
					<div className={classes.links}>
						<ButtonPlain className={classes.link} onClick={logout}>
							Logout
						</ButtonPlain>
					</div>

					:

					<div className={classes.links}>
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
						<ButtonPlain onClick={previewAsAdmin}>Preview</ButtonPlain>
					</div>

			}



		</Fragment>
	);
};

export default Auth;