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
        <div>
            <p className={seeMore ? classes.expanded : classes.collapsed}>{description}</p>
            <ButtonPlain onClick={()=>setSeeMore(!seeMore)}>{seeMore ? "[See Less]" : "[See More]"}</ButtonPlain>
        </div>
    );
};

export default BookDescription;