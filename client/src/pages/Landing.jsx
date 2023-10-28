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

		</div>
	);
};

export default Landing;