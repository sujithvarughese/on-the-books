import classes from "./styles/BookLibrary.module.css";
import { useState } from "react";
import { axiosAPI, axiosDB } from "../../utils/axios.js";
import { NavLink } from "react-router-dom";
import Card from "../../ui/Card.jsx";
import {BookPreview} from "../index.js";

const BookCover = (book) => {

    const {
        _id,
        title,
        author,
        coverID,
        OLID,
        description,
        yearPublished,
        infoURL,
        previewAvailable,
        previewURL
    } = book;

    // make state value to add fields to book if user clicks and we need to show in modal
    const [currentBook, setCurrentBook] = useState(book)

    const coverImageLink = `https://covers.openlibrary.org/b/id/${coverID}-M.jpg`

    const [showModal, setShowModal] = useState(false)

    const showBookDetails = async () => {
        // create new book variable to update with details to later updated in state
        let updatedBook = { ...currentBook }
        // get book cover info
        try {
            const coverEditionKey = book.coverEditionKey
            const previewResponse = await axiosAPI(`/api/books?bibkeys=OLID:${coverEditionKey}&format=json`)
            const info = previewResponse.data[`OLID:${coverEditionKey}`];
            // info_url -> link to more info
            // preview -> value will be "noview" if preview is not available
            // previewURL -> link to preview
            const { info_url, preview, preview_url } = info;
            updatedBook = { ...updatedBook, infoURL: info_url, previewAvailable: preview, previewURL: preview_url  }
        } catch (error) {
            throw new Error(error)
        }
        // get book description
        try {
            const response = await axiosAPI(`/works/${OLID}.json`)
            const { description } = response.data
            console.log(description)
            updatedBook = { ...updatedBook, description: description.value || description}
        } catch (error){
            throw new Error(error)
        }
        // updated in state
        setCurrentBook(updatedBook)
        setShowModal(true)
    }

    return (
        <Card>
            {
                showModal &&
                <BookPreview
                    book={currentBook}
                    setShowModal={setShowModal}
                />
            }
        <div className={classes.container}>

            {  // book.status field only exists in book in myLibrary
                book.status ?
                    <NavLink
                        to={`/library/${_id}`}
                    >
                        <img className={classes.cover} src={coverImageLink} alt={title}/>
                    </NavLink>
                    :
                    <div>
                        {/* use API to get book info then set modal */}
                        <img onClick={showBookDetails} className={classes.cover} src={coverImageLink} alt={title}/>
                    </div>
            }

           <div className={classes.details}>
               {
                   book.status ?
                       <NavLink
                           to={`/library/${_id}`}
                       >
                           <p className={classes.title}>{title}</p>
                       </NavLink>
                       :
                       <p className={classes.title}>
                           {title}
                       </p>
               }
               <p className={classes.author}>{author}</p>
               <p className={classes.year}>{yearPublished}</p>
           </div>
        </div>
        </Card>
    );
};

export default BookCover;