import classes from "./styles/Notebook.module.css";
import {CreateNoteForm, NoteContent, NoteItem} from "../index.js";
import {useState} from "react";
import {Button, ButtonIcon} from "../../ui/index.js";
import { IoIosCreate } from "react-icons/io";
import ButtonPlain from "../../ui/ButtonPlain.jsx";
import {axiosDB} from "../../utils/axios.js";
import notebookFull from "../../assets/images/notebook-full.png";
import notebookHalf from "../../assets/images/notebook-half.png";

const Notebook = ({ notebook }) => {

    const [myNotebook, setMyNotebook] = useState(notebook)
    const [showCreateNoteForm, setShowCreateNoteForm] = useState(false)
    const [displayedContent, setDisplayedContent] = useState(null)

    const createNote = async (newNote) => {
        // const { bookID, title, content } = newNote
        try {
            const response = await axiosDB.post("/notebook", { ...newNote, book: _id })
            const { note } = response.data
            const updatedNotebook = [...myNotebook]
            updatedNotebook.push(note)
            setMyNotebook(updatedNotebook)
        } catch (error) {
            throw new Error(error)
        }
    }

    const updateNote = async (updatedNote) => {
        try {
            const response = await axiosDB.patch("/notebook", updatedNote)
            const { note } = response.data
            const updatedNotebook = [...myNotebook]
            const noteIndex = updatedNotebook.findIndex(noteElement => noteElement._id === note._id)
            updatedNotebook[noteIndex] = note
            setMyNotebook(updatedNotebook)
        } catch (error) {
            throw new Error(error)
        }
    }
    return (
        <div className={classes.container}>
            <img className={classes.halfImage} src={notebookHalf} alt="notebook" />
            <img className={classes.fullImage} src={notebookFull} alt="notebook" />

            <div className={classes.notebook}>
                <div className={classes.createButton}>
                    {
                        !showCreateNoteForm &&
                        <ButtonIcon
                            onClick={()=>setShowCreateNoteForm(true)}
                        >
                            <IoIosCreate />
                        </ButtonIcon>}
                </div>

                <div className={classes.title}>

                    <div className={classes.mobile}>
                        {
                            showCreateNoteForm ?
                            <CreateNoteForm createNote={createNote} closeForm={()=>setShowCreateNoteForm(false)}/>
                            :
                            <div>
                                {
                                    notebook?.map((note, index) =>
                                        <div onClick={()=>setDisplayedContent(note)} key={index}>
                                            <NoteItem note={note} updateNote={updateNote}/>
                                        </div>
                                    )
                                }
                            </div>
                        }
                    </div>
                    <div className={classes.large}>
                        {
                            notebook?.map((note, index) =>
                                <div onClick={()=>setDisplayedContent(note)} key={index}>
                                    <NoteItem note={note} updateNote={updateNote}/>
                                </div>
                            )
                        }
                    </div>



                </div>

               <div className={classes.content}>
                   {
                       showCreateNoteForm ?
                           <CreateNoteForm createNote={createNote} closeForm={()=>setShowCreateNoteForm(false)}/>
                           :
                           (displayedContent && <NoteContent note={displayedContent} updateNote={updateNote}/>)
                   }
               </div>

            </div>
        </div>
    );
};



export default Notebook;