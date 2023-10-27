import classes from "./styles/Landing.module.css"
import { About } from "../components";
import img from "../assets/images/landing/AdobeStock_298028330.jpeg"

const Landing = () => {
	return (
		<div>

		<div className={classes.landing}>

		</div>

		<div className={classes.about}>
			<About />
		</div>

		<div className={classes.image}>
			<div className={classes.text}>All in one place.</div>
		</div>




		</div>
	);
};

export default Landing;