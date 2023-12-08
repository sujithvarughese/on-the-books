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
            {seeMore ?
                <p className={classes.expanded}>{description}</p>
                :
                <p className={classes.collapsed}>{description.substring(0,300)}</p>
            }
            <div className={classes.button}>
                <ButtonPlain onClick={()=>setSeeMore(!seeMore)}>{seeMore ? "[See Less]" : "[See More]"}</ButtonPlain>
            </div>

        </div>
    );
};

export default BookDescription;