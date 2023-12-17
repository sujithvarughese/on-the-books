import classes from "./styles/Landing.module.css"
import { About, Login, Register } from "../components";

const Landing = () => {


	return (
		<div className={classes.container}>
			<About />
			<Login />
			<Register />
		</div>
	);
};

export default Landing;