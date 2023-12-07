import classes from "./styles/NotebookPreview.module.css";
import {Button, Modal} from "../../ui/index.js";
import {useState} from "react";
import {CreateNoteForm, NoteItem, NoteContent} from "../";

const NotebookPreview = ({ recentNotes, createNote, showFullNotebook }) => {


    const [showCreateNoteModal, setShowCreateNoteModal] = useState(false)

    return (
        <div>
            <Button>Create Quick Note</Button>

            {
                showCreateNoteModal &&
                <Modal>
                    <CreateNoteForm createNote={createNote} closeForm={()=>setShowCreateNoteModal(false)}/>
                </Modal>
            }

            {
                recentNotes.map((recentNote, index) =>
                    <div key={index}>
                        <NoteItem note={recentNote} />
                        <NoteContent note={recentNote} />
                    </div>
                )
            }
            <Button onClick={showFullNotebook}>Show full Notebook</Button>



        </div>
    );
};

export default NotebookPreview;