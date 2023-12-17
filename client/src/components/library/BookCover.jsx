import classes from "./styles/BookLibrary.module.css";
import { useState } from "react";
import { AnimatePresence} from "framer-motion";
import { axiosAPI, axiosDB } from "../../utils/axios.js";
import { NavLink } from "react-router-dom";
import Card from "../../ui/Card.jsx";
import {BookPreview} from "../index.js";

// component that displays book within the list in library and discover page
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
        // create new book variable to update with details to later update in state
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
            // add description property to book (some books have a value property within description, and some do not)
            updatedBook = { ...updatedBook, description: description.value || description}
        } catch (error){
            throw new Error(error)
        }
        // updated book in state and update showModal state
        setCurrentBook(updatedBook)
        setShowModal(true)
    }

    return (
        <Card>
            <AnimatePresence>
                {   // if book is clicked, modal with preview will open
                    showModal &&
                    <BookPreview
                        book={currentBook}
                        setShowModal={setShowModal}
                    />
                }
            </AnimatePresence>

        <div className={classes.container}>

            {  // book.status field only exists in book in myLibrary so if book in library, clicking will take user to book in library, if not(in Discover), then modal will open
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