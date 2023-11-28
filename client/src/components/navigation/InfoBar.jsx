import classes from "./styles/InfoBar.module.css"
import { useGlobalContext } from "../../context/GlobalContext.jsx";
import { Button } from "../../ui";
import {useNavigate, useLocation, NavLink} from "react-router-dom";
import { HeaderLogo } from "../../components"
import { useEffect, useState } from "react";

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
		<div className={classes.infoBar}>
			{
				user && showBackButton &&
					<div className={classes.back} onClick={() => navigate(-1)}>
						<Button>◁ Back</Button>
					</div>
			}
			{
				!user &&
				<NavLink
					to="/"
					className={classes.link}
				>
					<h3 className={classes.title}>On the Books</h3>
				</NavLink>
			}

			{
				user &&
					<div className={classes.logout}>
						<Button onClick={logout}>Logout</Button>
					</div>
			}


		</div>
	);
};

export default InfoBar;