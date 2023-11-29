import classes from "./styles/Root.module.css";
import { Outlet, useNavigation, useNavigate, Navigate } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext.jsx";
import { useEffect, useState } from "react";
import { Navbar } from "../components";


const Root = () => {
	const navigation = useNavigation()
	const { user } = useGlobalContext()
	// automatically redirect appropriately if user credentials ok
	const navigate = useNavigate();
	const [userLoggedIn, setUserLoggedIn] = useState(false)

	const previewAsAdmin = () => {

	}

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
				{ navigation.state === 'loading' && <h3>Loading...</h3> }
				<Outlet />
			</div>

		</div>
	);
};

export default Root;