import classes from "./styles/NotebookPreview.module.css";
import {Button, Modal} from "../../ui/index.js";
import {useState} from "react";
import {RecentNotes, CreateNoteForm} from "../";

const NotebookPreview = ({ bookID, recentNotes, createNote, updateNote }) => {


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
                recentNotes.map((recentNote, index) => <div key={index}>{recentNote.content}</div>)
            }



        </div>
    );
};

export default NotebookPreview;