import classes from "./styles/Root.module.css";
import { Outlet, useNavigation, useNavigate, Navigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext.jsx";
import { useEffect, useState } from "react";
import { DesktopNavbar, InfoBar, MobileNavbar } from "../components";


const Root = () => {
	const navigation = useNavigation()
	const { user } = useGlobalContext()
	// automatically redirect appropriately if user credentials ok
	const navigate = useNavigate();
	const [userLoggedIn, setUserLoggedIn] = useState(false)

	useEffect(() => {
		if (user && Object.keys(user).length > 0) {
			setUserLoggedIn(true)
			navigate("/library");
		}
		else {
			setUserLoggedIn(false)
			navigate("/")
		}
	}, [user]);

	return (
		<div className={classes.root}>

			<div className={classes.desktop}>
				<DesktopNavbar userLoggedIn={userLoggedIn}/>
			</div>

			<div className={classes.infobar}>
				<InfoBar />
			</div>



			<main>
				{ navigation.state === 'loading' && <h3>Loading...</h3> }
				<Outlet />
			</main>

			<div className={classes.mobile}>
				<MobileNavbar userLoggedIn={userLoggedIn}/>
			</div>


		</div>
	);
};

export default Root;