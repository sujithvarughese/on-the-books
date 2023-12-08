import classes from "./styles/Note.module.css";
import {axiosDB} from "../../utils/axios.js";
import {ButtonPlain} from "../../ui/index.js";
import {NoteContent} from "../index.js";

const Note = ({ note, setDisplayedNote}) => {

    const { title, content, updatedAt } = note

    const updatedDate = new Date(note.updatedAt).toLocaleString('en-US',{ year:'numeric', month:'short', day:'numeric', timeZone: 'UTC' })

    return (
        <ButtonPlain onClick={()=>setDisplayedNote(note)}>
            <div className={classes.container}>
                <div className={classes.title}>
                    {title}
                </div>
                <div className={classes.date}>
                    {updatedDate}
                </div>
                <div className={classes.content}>
                    {content}
                </div>
            </div>
        </ButtonPlain>
    );
};

export default Note;