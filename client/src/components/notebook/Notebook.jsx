import classes from "./styles/Notebook.module.css";
import {CreateNoteForm, NoteContent, Note } from "../index.js";
import {useState} from "react";
import {Button, ButtonIcon} from "../../ui/index.js";
import { IoIosCreate } from "react-icons/io";
import ButtonPlain from "../../ui/ButtonPlain.jsx";
import {axiosDB} from "../../utils/axios.js";
import notebookFull from "../../assets/images/notebook-full.png";
import notebookHalf from "../../assets/images/notebook-half.png";

const Notebook = ({ notebook, book }) => {

    const [myNotebook, setMyNotebook] = useState(notebook)
    const [showCreateNoteForm, setShowCreateNoteForm] = useState(false)
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

    return (
        <div className={classes.container}>
            <img className={classes.halfImage} src={notebookHalf} alt="notebook" />
            <img className={classes.fullImage} src={notebookFull} alt="notebook" />

            <div className={classes.notebook}>

                <div className={(displayedNote || showCreateNoteForm) ? `${classes.hidden} ${classes.left}` : classes.left}>
                    <div className={classes.createButton}>
                        <ButtonIcon onClick={()=> {
                            setDisplayedNote(null)
                            setShowCreateNoteForm(true)
                        }}>
                            <IoIosCreate />
                        </ButtonIcon>
                    </div>

                    <div className={classes.list}>
                        {myNotebook?.map(note => <Note key={note._id} note={note} setDisplayedNote={setDisplayedNote}/>)}
                    </div>
                </div>

                <div className={classes.right}>
                    {showCreateNoteForm && <CreateNoteForm createNote={createNote} closeForm={()=>setShowCreateNoteForm(false)}/>}
                    {displayedNote && <NoteContent note={displayedNote} goBack={()=>setDisplayedNote(null)}/>}
                </div>

            </div>
        </div>
    );
};



export default Notebook;