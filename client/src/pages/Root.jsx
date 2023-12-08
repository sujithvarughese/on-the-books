import classes from "./styles/Root.module.css";
import { Outlet, useNavigation, useNavigate, Navigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext.jsx";
import { useEffect, useState } from "react";
import { Navbar } from "../components";
import { Loading } from "../ui"

const Root = () => {
	const navigation = useNavigation()
	console.log(navigation.state)
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
		<div className={classes.container}>

			<Navbar userLoggedIn={userLoggedIn} />

			<div className={classes.main}>
				{ navigation.state === 'loading' && <Loading /> }
				<Outlet />
			</div>

		</div>
	);
};

export default Root;