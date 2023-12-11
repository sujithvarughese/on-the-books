import classes from "./styles/BookDescription.module.css";
import ButtonPlain
    from "../../ui/ButtonPlain.jsx";
import {
    useState
} from "react";

const BookDescription = ({ description }) => {

    if (!description) return null

    const [seeMore, setSeeMore] = useState(false)

    return (

        <div className={classes.container}>
            {/* for different screen sizes-> has to be a better way to do this? */}
            <div className={classes.sm}>
                {
                    (description.length < 240 || seeMore) ?
                        <p className={classes.expanded}>{description}</p>
                        :
                        <div>
                            <p className={classes.collapsed}>{description.substring(0,240)}</p>
                            <div className={classes.button}>
                                <ButtonPlain onClick={()=>setSeeMore(!seeMore)}>{seeMore ? "[See Less]" : "[See More]"}</ButtonPlain>
                            </div>
                        </div>
                }
            </div>
            <div className={classes.md}>
                {
                    (description.length < 315 || seeMore) ?
                        <p className={classes.expanded}>{description}</p>
                        :
                        <div>
                            <p className={classes.collapsed}>{description.substring(0,315)}</p>
                            <div className={classes.button}>
                                <ButtonPlain onClick={()=>setSeeMore(!seeMore)}>{seeMore ? "[See Less]" : "[See More]"}</ButtonPlain>
                            </div>
                        </div>
                }
            </div>
            <div className={classes.lg}>
                {
                    (description.length < 480 || seeMore) ?
                        <p className={classes.expanded}>{description}</p>
                        :
                        <div>
                            <p className={classes.collapsed}>{description.substring(0,480)}</p>
                            <div className={classes.button}>
                                <ButtonPlain onClick={()=>setSeeMore(!seeMore)}>{seeMore ? "[See Less]" : "[See More]"}</ButtonPlain>
                            </div>
                        </div>
                }
            </div>
            <div className={classes.xl}>
                {
                    (description.length < 740 || seeMore) ?
                        <p className={classes.expanded}>{description}</p>
                        :
                        <div>
                            <p className={classes.collapsed}>{description.substring(0,740)}</p>
                            <div className={classes.button}>
                                <ButtonPlain onClick={()=>setSeeMore(!seeMore)}>{seeMore ? "[See Less]" : "[See More]"}</ButtonPlain>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default BookDescription;