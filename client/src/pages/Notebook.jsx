import classes from "./styles/Notebook.module.css";
import {axiosDB} from "../utils/axios.js";
import {useLoaderData, useLocation} from "react-router-dom";
import {CreateNoteForm, NoteContent, NoteItem} from "../components/index.js";
import {useState} from "react";
import {Button} from "../ui/index.js";

const Notebook = () => {
    const location = useLocation()
    const { state } = location
    const { bookID, notebook, createNote, updateNote } = state

    const [showCreateNoteForm, setShowCreateNoteForm] = useState(false)

    return (
        <div>
            {!showCreateNoteForm && <Button onClick={()=>setShowCreateNoteForm(true)}>Create New Note</Button>}
            {showCreateNoteForm && <CreateNoteForm createNote={createNote} closeForm={()=>setShowCreateNoteForm(false)}/>}

            {
                notebook?.map((note, index) =>
                    <NoteItem
                        key={index}
                        note={note}
                    />)
            }
            <NoteContent />
        </div>
    );
};

export default Notebook;