import classes from "./styles/NotebookPreview.module.css";
import {Button} from "../../ui/index.js";
import {useState} from "react";
import {CreateNoteForm, NoteItem, NoteContent, NotePreview} from "../";

const NotebookPreview = ({ recentNotes, createNote, showFullNotebook }) => {


    const [showCreateNoteModal, setShowCreateNoteModal] = useState(false)

    return (
        <div className={classes.container}>

            {
                showCreateNoteModal &&
                <CreateNoteForm createNote={createNote} closeForm={()=>setShowCreateNoteModal(false)}/>

            }

            <div className={classes.buttons}>
                <Button onClick={()=>setShowCreateNoteModal(true)}>Create Quick Note</Button>
                {recentNotes.length > 0 && <Button onClick={showFullNotebook}>Show full Notebook</Button>}
            </div>

            {
                recentNotes?.length === 0 ?
                    <div>
                        <p>You don't have any note entries yet. Try creating one!</p>
                    </div>
                    :
                    <div className={classes.recentNotes}>
                        Recent Notes:
                        {
                            recentNotes?.map((note, index) =>
                                <NotePreview key={index} title={note.title} content={note.content}/>
                            )
                        }
                    </div>
            }












        </div>
    );
};

export default NotebookPreview;