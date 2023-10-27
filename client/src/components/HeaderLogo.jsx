import logo from "../assets/images/logo.png"
import classes from "./styles/HeaderLogo.module.css";
import { NavLink } from "react-router-dom";


const HeaderLogo = () => {
	return (
		<NavLink to="/">
			<img className={classes.logo} src={logo} alt="logo" />
		</NavLink>

	);
};

export default HeaderLogo;