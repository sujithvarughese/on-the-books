import classes from "./styles/Notebook.module.css";
import { NoteItem } from "../../components"
import {useState} from "react";
const Notebook = ({ bookID, notebook, updateBookDetails}) => {

    const [notebookState, setNotebookState] = useState(notebook)

    return (
        <div className={classes.container}>

            {
                notebookState.length === 0 ?
                    <div className={classes.text}>
                        No Book Notes. Make one by pressing the Create button!
                    </div>
                    :
                    notebookState?.map((note, index) => {
                        return (
                            <NoteItem
                                key={index}
                                note={note}
                                updateBookDetails={updateBookDetails}
                                notebookState={notebookState}
                                setNotebookState={setNotebookState}
                            />)
                    })
            }

        </div>
    );
};

export default Notebook;