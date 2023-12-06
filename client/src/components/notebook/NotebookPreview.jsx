import classes from "./styles/NotebookPreview.module.css";
import {Button, Modal} from "../../ui/index.js";
import {useState} from "react";
import {RecentNotes, CreateNoteForm} from "../";

const NotebookPreview = ({ bookID, notebook, showFullNotebook }) => {

    const [recentNotes, setRecentNotes] = useState(notebook?.slice(-3))

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

            {recentNotes.length > 0 && <RecentNotes recentNotes={recentNotes}/>}



            <Button onClick={showFullNotebook}>Show full notebook</Button>


        </div>
    );
};

export default NotebookPreview;