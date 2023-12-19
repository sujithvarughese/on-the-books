import classes from "./styles/Landing.module.css"
import { About, Login, Register } from "../components";
import {useGlobalContext} from "../context/GlobalContext.jsx";

const Landing = () => {

	const { authState } = useGlobalContext()

	return (
		<div className={classes.container}>
			<div className={authState === "" ? "" : classes.blur}>
				<About />
			</div>
			{authState === "login" && <Login />}
			{authState === "register" && <Register />}

		</div>
	);
};

export default Landing;