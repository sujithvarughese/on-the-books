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
            {
                seeMore ?
                    <div>
                        <p>{description}</p>
                        <ButtonPlain onClick={()=>setSeeMore(false)}>[See Less]</ButtonPlain>
                    </div>
                    :
                    <div>
                        <p>{description?.substring(0, 250)} ...</p>
                        <ButtonPlain onClick={()=>setSeeMore(true)}>[See More]</ButtonPlain>
                    </div>
            }
        </div>
    );
};

export default BookDescription;