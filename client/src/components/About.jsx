import classes from "./styles/About.module.css";
import img1 from "../assets/images/landing/AdobeStock_223259229.jpeg"
import img2 from "../assets/images/landing/AdobeStock_96515336.jpeg"
import img3 from "../assets/images/landing/AdobeStock_370157316.jpeg"
import img4 from "../assets/images/landing/AdobeStock_190212505.jpeg"
import img5 from "../assets/images/landing/AdobeStock_241739395.jpeg"
import {Card} from "../ui/index.js";
const About = () => {

	return (
		<div className={classes.content}>
			<div className={classes.card}>
				<div className={classes.text}>
					Discover new reading.
				</div>
				<img src={img1} alt="img1" className={classes.image}/>
			</div>

			<div className={classes.card}>
				<img src={img2} alt="img2" className={classes.image}/>
				<div className={classes.text}>
					Create effective notes.
				</div>
			</div>

			<div className={classes.card}>
				<div className={classes.text}>
					Retain more information.
				</div>
				<img src={img3} alt="img3" className={classes.image}/>
			</div>

			<div className={classes.card}>
				<img src={img4} alt="img4" className={classes.image}/>
				<div className={classes.text}>
					Organize your collection.
				</div>
			</div>

			<div className={classes.card}>
				<div className={classes.text}>
					Expand your horizons.
				</div>
				<img src={img5} alt="img5" className={classes.image}/>
			</div>
		</div>
	);
};

export default About;