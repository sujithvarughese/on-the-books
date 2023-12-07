import classes from "./styles/Notebook.module.css";
import {CreateNoteForm, NoteContent, NoteItem} from "../index.js";
import {useState} from "react";
import {Button, ButtonIcon} from "../../ui/index.js";
import { IoIosCreate } from "react-icons/io";
import ButtonPlain from "../../ui/ButtonPlain.jsx";

const Notebook = ({ notebook, createNote, updateNote, hideNotebook }) => {

    const [showCreateNoteForm, setShowCreateNoteForm] = useState(false)
    const [displayedContent, setDisplayedContent] = useState(null)

    return (
        <div className={classes.container}>
            <div className={classes.button}>
                <Button onClick={hideNotebook}>Hide Notebook</Button>
            </div>


            {showCreateNoteForm && <CreateNoteForm createNote={createNote} closeForm={()=>setShowCreateNoteForm(false)}/>}

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
                    {
                        notebook?.map((note, index) =>
                            <div onClick={()=>setDisplayedContent(note)} key={index}>
                                <NoteItem note={note}/>
                            </div>
                        )
                    }
                </div>
               <div className={classes.content}>
                   {
                       displayedContent && <NoteContent note={displayedContent} updateNote={updateNote}/>
                   }
               </div>

            </div>
        </div>
    );
};

export default Notebook;