import classes from "./styles/NotebookContainer.module.css";
import {useState} from 'react';
import {
    CreateNoteForm,
    Notebook,
    NotebookPreview
} from "../../components"
import createNoteForm
    from "./CreateNoteForm.jsx";
import {
    Button,
    Modal
} from "../../ui/index.js";
const NotebookContainer = ({ bookID, notebook, updateBookDetails}) => {

    const dates = Date.now()
    const currentDate = new Date(dates)
    const date = currentDate.toLocaleString('en-US',{ year:'numeric', month:'short', day:'numeric', timeZone: 'UTC' })
    const time = currentDate.toLocaleTimeString("en-US")

    const [notebookState, setNotebookState] = useState(notebook)
    const [showCreateNoteModal, setShowCreateNoteModal] = useState(false)
    const [showFullNotebook, setShowFullNotebook] = useState(false)

    const [showUpdateConfirmation, setShowUpdateConfirmation] = useState(false)

    const createNote = (newNote) => {
        const duplicateNote = notebookState.find(noteInArray => noteInArray.title === newNote.title)
        if (duplicateNote || !newNote.title) {
            console.log("Invalid Note");
            return
        }
        const updatedNotebook = [...notebookState, newNote]
        updateBookDetails({ notebook: updatedNotebook})
        setNotebookState(updatedNotebook)
    }

    const editNote = (oldNote, updatedNote) => {
        const noteToUpdateIndex = notebookState.findIndex(noteInArray => noteInArray.title === oldNote.title)
        setShowUpdateConfirmation(true)
        notebookState[noteToUpdateIndex] = updatedNote
        const updatedNotebook = [...notebookState]
        updateBookDetails({ notebook: updatedNotebook })
        setNotebookState(updatedNotebook)
    }

    return (
        <div>

            {
                showFullNotebook ?
                    <Notebook
                        bookID={bookID}
                        notebook={notebookState}
                        createNote={createNote}
                        editNote={editNote}
                    />
                    :
                    <div>
                        {
                            notebookState.length === 0 &&
                            <div className={classes.text}>
                                Notebook is empty! Make your first entry by pressing the Create Quick Note button, or just open up the notebook and start writing!
                            </div>
                        }
                        <Button>Create Quick Note</Button>
                        {
                            showCreateNoteModal &&
                            <Modal>
                                <CreateNoteForm createNote={createNote} closeForm={()=>setShowCreateNoteModal(false)}/>
                            </Modal>
                        }
                        <NotebookPreview
                            bookID={bookID}
                            notebook={notebookState}
                            showFullNotebook={()=>setShowFullNotebook(true)}
                        />
                    </div>

            }
        </div>
    );
};

export default NotebookContainer;