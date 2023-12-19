import classes from "./styles/Navbar.module.css"
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext.jsx";
import {Fragment, useState} from "react";
import {ButtonPlain, ButtonLink} from "../../ui";
import cx from "classnames"

const credentials = {
	email: import.meta.env.VITE_ADMIN_LOGIN,
	password: import.meta.env.VITE_ADMIN_PASSWORD
}
const AuthLinks = () => {

	const { user, logout, login, authState, setAuthState } = useGlobalContext()
	const [buttonText, setButtonText] = useState("Preview")

	const previewAsAdmin = () => {
		setTimeout(() => {
			setButtonText("Preview")
		})
		setButtonText("Logging in...")
		login(credentials)
	}
	console.log(authState)
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
						<ButtonLink
							onClick={()=>setAuthState("login")}
							className={`${classes.link} ${authState === "login" && classes.active}`}
						>Login
						</ButtonLink>
						<ButtonLink
							onClick={()=>setAuthState("register")}
							className={`${classes.link} ${authState === "register" && classes.active}`}
						>Register
						</ButtonLink>
					</div>

			}
		</Fragment>
	);
};

export default AuthLinks;