import classes from "./styles/EditNoteForm.module.css";
import {Button, Form, Input, Textarea} from "../../ui";
import {useState} from "react";


const EditNoteForm = ({ noteID, title, content, updateNote, closeForm, updateNotebookState }) => {

    const [noteTitle, setNoteTitle] = useState(title)
    const [noteContent, setNoteContent] = useState(content)
    const [buttonText, setButtonText] = useState("Save")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await updateNote({ noteID: noteID, title: noteTitle, content: noteContent })
            const { message, note } = response
            console.log(note)
            if (message === 'success') {
                setButtonText("Saved!")
            }
            updateNotebookState(note)
            setTimeout(() => {
                closeForm()
            }, 1000)
        } catch (error) {
            setButtonText("Error")
            throw new Error(error)
        }
    }

    return (

        <Form onSubmit={handleSubmit}>
            <div className={classes.content}>
            <Input
                htmlFor="noteTitle"
                type="text"
                name="noteTitle"
                value={noteTitle}
                onChange={(e)=>setNoteTitle(e.target.value)}
            ></Input>
            <Textarea
                placeholder="Type new note here..."
                name="noteContent"
                value={noteContent}
                onChange={(e)=>setNoteContent(e.target.value)}
            ></Textarea>
                <div className={classes.buttons}>
                    <Button type="submit">{buttonText}</Button>
                    <Button onClick={closeForm}>Cancel</Button>
                </div>
            </div>
        </Form>


    );
};

export default EditNoteForm;