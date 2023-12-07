import classes from "./styles/Notebook.module.css";
import {CreateNoteForm, NoteContent, NoteItem} from "../index.js";
import {useState} from "react";
import {Button} from "../../ui/index.js";

const Notebook = ({ notebook, createNote, updateNote, hideNotebook }) => {

    const [showCreateNoteForm, setShowCreateNoteForm] = useState(false)
    const [displayedContent, setDisplayedContent] = useState(null)
    console.log(displayedContent)
    return (
        <div className={classes.container}>
            {!showCreateNoteForm && <Button onClick={()=>setShowCreateNoteForm(true)}>Create New Note</Button>}
            {showCreateNoteForm && <CreateNoteForm createNote={createNote} closeForm={()=>setShowCreateNoteForm(false)}/>}

            <div className={classes.notebook}>
                <div>
                    {
                        notebook?.map((note, index) =>
                            <div onClick={()=>setDisplayedContent(note)} key={index}>
                                <NoteItem note={note}/>
                            </div>
                        )
                    }
                </div>
               <div>
                   {
                       displayedContent && <NoteContent title={displayedContent.title} content={displayedContent.content} updateNote={updateNote}/>
                   }
               </div>

            </div>

            <Button onClick={hideNotebook}>Hide Notebook</Button>

        </div>
    );
};

export default Notebook;