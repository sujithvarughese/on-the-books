import classes from "./styles/EditNoteForm.module.css";
import {Button, Form, Input, Textarea} from "../../ui";
import {useState} from "react";


const EditNoteForm = ({ _id, title, content, updateNote, closeForm }) => {

    const [noteTitle, setNoteTitle] = useState(title)
    const [noteContent, setNoteContent] = useState(content)

    const handleSubmit = (e) => {
        e.preventDefault()
        updateNote({ _id, title, content })
        closeForm()
    }

    return (
        <div className={classes.container}>
            <Form onSubmit={handleSubmit}>
                <div className={classes.content}>
                <Input
                    htmlFor="noteEditTitle"
                    type="text"
                    name="noteEditTitle"
                    value={noteTitle}
                    onChange={(e)=>setNoteTitle(e.target.value)}
                ></Input>
                <Textarea
                    placeholder="Type new note here..."
                    name="noteEditContent"
                    value={noteContent}
                    onChange={(e)=>setNoteContent(e.target.value)}
                ></Textarea>
                    <div className={classes.buttons}>
                        <Button type="submit">Save</Button>
                        <Button onClick={closeForm}>Cancel</Button>
                    </div>
                </div>
            </Form>
        </div>

    );
};

export default EditNoteForm;