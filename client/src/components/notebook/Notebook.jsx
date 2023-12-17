import classes from "./styles/Notebook.module.css";
import {CreateNoteForm, NoteContent, Note } from "../index.js";
import {useState} from "react";
import {Button, ButtonIcon} from "../../ui/index.js";
import { AnimatePresence } from "framer-motion";
import { IoIosCreate } from "react-icons/io";
import ButtonPlain from "../../ui/ButtonPlain.jsx";
import {axiosDB} from "../../utils/axios.js";
import cx from "classnames"
import notebookFull from "../../assets/images/notebook-full.png";
import notebookHalf from "../../assets/images/notebook-half.png";

const Notebook = ({ notebook, book }) => {

    // state to keep track of notebook on changes to can update DOM appropriately
    const [myNotebook, setMyNotebook] = useState(notebook)
    const [showCreateNoteForm, setShowCreateNoteForm] = useState(false)
    const [editMode, setEditMode] = useState(false)
    // on small screens, note content will be displayed instead of note list
    // large screens, note list is always displayed on left side and content on right when selected
    const [displayedNote, setDisplayedNote] = useState(null)
    const createNote = async (newNote) => {
        // const { bookID, title, content } = newNote
        try {
            const response = await axiosDB.post("/notebook", { ...newNote, book })
            const { note, message } = response.data
            const updatedNotebook = [...myNotebook]
            updatedNotebook.push(note)
            setMyNotebook(updatedNotebook)
            return message
        } catch (error) {
            throw new Error(error)
        }
    }

    const updateNotebookState = (updatedNote) => {
        const updatedNotebook = myNotebook.filter(note => note._id !== updatedNote._id)
        updatedNotebook.unshift(updatedNote)
        setMyNotebook(updatedNotebook)
        setDisplayedNote({ ...displayedNote, title: updatedNote.title, content: updatedNote.content })
    }

    return (
        <div className={classes.container}>
            <div className={classes.notebook}>
                {/* classes.hidden -> hidden on small screens when true, classes.left always true for large screens */}
                {/* designed so when selected, note list will not be displayed on small screens (when displayedNote or showCreateForm is true) */}
                <div className={cx(classes.left, `${(displayedNote || showCreateNoteForm) && classes.hidden}`)}>
                    {/* displayed note to null and will place create note form in its place */}
                    <div className={(showCreateNoteForm || editMode) ? classes.hiddenAll : classes.createButton}>
                        <ButtonIcon onClick={()=> {
                            setDisplayedNote(null)
                            setShowCreateNoteForm(true)
                        }}>
                            <IoIosCreate />
                        </ButtonIcon>
                    </div>

                    <div className={classes.leftContainer}>
                        {myNotebook?.map(note => <Note key={note._id} note={note} setDisplayedNote={setDisplayedNote} setEditMode={setEditMode} setShowCreateForm={setShowCreateNoteForm}/>)}
                    </div>
                </div>

                <div className={cx(classes.right, !showCreateNoteForm && !displayedNote && classes.hidden)}>
                    <AnimatePresence>
                        {showCreateNoteForm && <CreateNoteForm createNote={createNote} closeForm={()=>setShowCreateNoteForm(false)}/>}
                    </AnimatePresence>


                    {displayedNote &&
                        <NoteContent
                            note={displayedNote}
                            goBack={()=>setDisplayedNote(null)}
                            editMode={editMode}
                            setEditMode={setEditMode}
                            updateNotebookState={updateNotebookState}
                        />
                    }
                </div>

            </div>
        </div>
    );
};



export default Notebook;