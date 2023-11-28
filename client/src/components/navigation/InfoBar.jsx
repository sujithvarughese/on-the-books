import classes from "./styles/InfoBar.module.css"
import { useGlobalContext } from "../../context/GlobalContext.jsx";
import { Button } from "../../ui";
import {useNavigate, useLocation, NavLink} from "react-router-dom";
import { HeaderLogo } from "../../components"
import { useEffect, useState } from "react";
import ButtonPlain from "../../ui/ButtonPlain.jsx";

const InfoBar = () => {

	const { logout, user } = useGlobalContext()
	const [showBackButton, setShowBackButton] = useState(false)
	const location = useLocation()

	useEffect(() => {
		if (location.pathname !== '/discover') {
			setShowBackButton(true)
		} else {
			setShowBackButton(false)
		}
	}, [location])


	const navigate = useNavigate()
	return (
		<div className={classes.container}>
		{
			user ?
				<div className={classes.user}>
					{ showBackButton && <ButtonPlain onClick={() => navigate(-1)}>◁ Back</ButtonPlain>}
					<ButtonPlain onClick={logout}>Logout</ButtonPlain>
				</div>
				:
				<NavLink
					to="/"
					className={classes.link}
				>
					<h3 className={classes.title}>On the Books</h3>
				</NavLink>
		}
		</div>
	);
};

export default InfoBar;