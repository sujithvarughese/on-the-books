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
                        <div>
                            <p className={classes.expanded}>{description}</p>
                            { seeMore &&
                            <div className={classes.button}>
                                <ButtonPlain onClick={()=>setSeeMore(false)}>See Less</ButtonPlain>
                            </div>
                            }
                        </div>

                        :
                        <div>
                            <p className={classes.collapsed}>{description.substring(0,240)}</p>
                            <div className={classes.button}>
                                <ButtonPlain onClick={()=>setSeeMore(true)}>See More</ButtonPlain>
                            </div>
                        </div>
                }
            </div>
            <div className={classes.md}>
                {
                    (description.length < 315 || seeMore) ?
                        <div>
                            <p className={classes.expanded}>{description}</p>
                            { seeMore &&
                                <div className={classes.button}>
                                    <ButtonPlain onClick={()=>setSeeMore(false)}>See Less</ButtonPlain>
                                </div>
                            }
                        </div>

                        :
                        <div>
                            <p className={classes.collapsed}>{description.substring(0,315)}</p>
                            <div className={classes.button}>
                                <ButtonPlain onClick={()=>setSeeMore(true)}>See More</ButtonPlain>
                            </div>
                        </div>
                }
            </div>
            <div className={classes.lg}>
                {
                    (description.length < 480 || seeMore) ?
                        <div>
                            <p className={classes.expanded}>{description}</p>
                            { seeMore &&
                                <div className={classes.button}>
                                    <ButtonPlain onClick={()=>setSeeMore(false)}>See Less</ButtonPlain>
                                </div>
                            }
                        </div>
                        :
                        <div>
                            <p className={classes.collapsed}>{description.substring(0,480)}</p>
                            <div className={classes.button}>
                                <ButtonPlain onClick={()=>setSeeMore(true)}>See More</ButtonPlain>
                            </div>
                        </div>
                }
            </div>
            <div className={classes.xl}>
                {
                    (description.length < 740 || seeMore) ?
                        <div>
                            <p className={classes.expanded}>{description}</p>
                            { seeMore &&
                                <div className={classes.button}>
                                    <ButtonPlain onClick={()=>setSeeMore(false)}>See Less</ButtonPlain>
                                </div>
                            }
                        </div>

                        :
                        <div>
                            <p className={classes.collapsed}>{description.substring(0,740)}</p>
                            <div className={classes.button}>
                                <ButtonPlain onClick={()=>setSeeMore(true)}>See More</ButtonPlain>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default BookDescription;