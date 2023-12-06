import classes from "./styles/NotebookCollapsed.module.css";
import {Button} from "../../ui/index.js";
import {useState} from "react";
const NotebookCollapsed = ({ bookID, notebook, updateBookDetails }) => {

    const [recentNotes, setRecentNotes] = useState(notebook.slice(0, 3))

    return (
        <div>
            <Button>Create Quick Note</Button>

            <div>
                Recent Notes
            </div>
            {
                recentNotes.map(recentNote => {

                })
            }




        </div>
    );
};

export default NotebookCollapsed;