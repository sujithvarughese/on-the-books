import classes from "./styles/Notebook.module.css";
import {AddNoteForm, NoteContent, NoteItem} from "../../components"
import {useState} from "react";
import {Button} from "../../ui/index.js";
// notebook is collection of notes stored in book
// note = { date, title, content}
const Notebook = ({ bookID, notebook, updateBookDetails}) => {

    const dates = Date.now()
    const currentDate = new Date(dates)
    const date = currentDate.toLocaleString('en-US',{ year:'numeric', month:'short', day:'numeric', timeZone: 'UTC' })
    const time = currentDate.toLocaleTimeString("en-US")
    const [notebookState, setNotebookState] = useState(notebook)
    const [showAddNoteForm, setShowAddNoteForm] = useState(false)

    const hideForm = () => {
        setShowAddNoteForm(false)
    }

    const addNote = (newNote) => {
        const duplicateNote = notebookState.find(noteInArray => noteInArray.title === newNote.title)
        if (duplicateNote || !newNote.title) {
            console.log("Invalid Note");
            return
        }
        const updatedNotebook = [...notebookState, newNote]
        updateBookDetails({ notebook: updatedNotebook})
        setNotebookState(updatedNotebook)
    }
    return (
        <div className={classes.container}>

            <div className={classes.head}>
                <div className={classes.title}>
                    Notebook
                </div>
                {
                    !showAddNoteForm &&
                    <div className={classes.addButton}>
                        <Button onClick={()=>setShowAddNoteForm(true)}>Create New Note</Button>
                    </div>

                }
            </div>


            {
                showAddNoteForm && <AddNoteForm addNote={addNote} hideForm={hideForm}/>
            }
            {
                notebookState.length === 0 &&
                    <div className={classes.text}>
                        No Book Notes. Make one by pressing the Create button!
                    </div>
            }
            {
                notebookState?.map((note, index) =>
                        <NoteItem
                            key={index}
                            note={note}
                            updateBookDetails={updateBookDetails}
                            notebookState={notebookState}
                            setNotebookState={setNotebookState}
                        />)
            }

        </div>
    );
};

export default Notebook;