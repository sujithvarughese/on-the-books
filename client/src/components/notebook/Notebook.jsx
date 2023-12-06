import classes from "./styles/Notebook.module.css";
import {CreateNoteForm, NotebookPreview, NoteContent, NoteItem} from "../../components"
import {useState} from "react";
import {Button} from "../../ui/index.js";
// notebook is collection of notes stored in book
// note = { date, title, content}
const Notebook = ({ bookID, notebook, createNote, editNote }) => {

    const [showCreateNoteForm, setShowCreateNoteForm] = useState(false)

    return (
        <div className={classes.container}>
            <div className={classes.notebook}>
                <div className={classes.head}>

                    <div className={classes.title}>
                        Notebook
                    </div>

                    {
                        !showCreateNoteForm &&
                        <div className={classes.createButton}>
                            <Button onClick={()=>setShowCreateNoteForm(true)}>Create New Note</Button>
                        </div>
                    }

                </div>

                {
                    showCreateNoteForm && <CreateNoteForm createNote={createNote} closeForm={()=>setShowCreateNoteForm(false)}/>
                }

                {
                    notebook?.map((note, index) =>
                        <NoteItem
                            key={index}
                            bookID={bookID}
                            note={note}
                            editNote={editNote}
                        />)
                }

            </div>






        </div>
    );
};

export default Notebook;