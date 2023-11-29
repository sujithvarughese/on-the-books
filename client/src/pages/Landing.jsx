import classes from "./styles/Landing.module.css"
import { About } from "../components";

const Landing = () => {


	return (
		<div className={classes.container}>
			<About />
		</div>
	);
};

export default Landing;