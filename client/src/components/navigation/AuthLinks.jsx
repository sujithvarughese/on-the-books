import classes from "./styles/Navbar.module.css"
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext.jsx";
import {Fragment, useState} from "react";
import ButtonPlain from "../../ui/ButtonPlain.jsx";

const credentials = {
	email: import.meta.env.VITE_ADMIN_LOGIN,
	password: import.meta.env.VITE_ADMIN_PASSWORD
}
const AuthLinks = () => {

	const { user, logout, login, setAuthState } = useGlobalContext()
	const [buttonText, setButtonText] = useState("Preview")

	const previewAsAdmin = () => {
		setTimeout(() => {
			setButtonText("Preview")
		})
		setButtonText("Logging in...")
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
						<ButtonPlain
							onClick={previewAsAdmin}
						>{buttonText}
						</ButtonPlain>
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

export default AuthLinks;