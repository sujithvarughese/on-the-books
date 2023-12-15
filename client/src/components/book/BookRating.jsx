import { FaRegStar, FaStar } from "react-icons/fa6";
import {useEffect, useState} from "react";
import ButtonIcon from "../../ui/ButtonIcon.jsx";

const BookRating = ({ rating, updateBookDetails }) => {

    const [ratingState, setRatingState] = useState(rating)
    const [stars, setStars] = useState([])

    useEffect(() => {
        const arr = []
        for (let i = 0; i < ratingState; i++) {
            arr.push(
                <FaStar style={{color: "var(--COLOR-ALT)", fontSize: "23px"}}/>)
        }
        for (let i = ratingState; i < 5; i++) {
            arr.push(
                <FaRegStar fontSize="23px"/>)
        }
        setStars(arr)
    }, [ratingState]);

    return (
        <div>
            {
                stars.map((star, index) =>
                    <ButtonIcon
                        key={index}
                        onClick={()=> {
                            updateBookDetails({ rating: index + 1 })
                            setRatingState(index + 1)
                        }}
                    >
                        {star}
                    </ButtonIcon>
                )

            }
        </div>
    );
};

export default BookRating;