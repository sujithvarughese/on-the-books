import classes from "./styles/CreateNoteForm.module.css";
import { Input, Button, Form, Modal, Card, Textarea } from "../../ui/index.js";
import { useState } from "react";

const initialState = {
	title: "",
	content: ""
}

const CreateNoteForm = ({ createNote, closeForm }) => {

	const [newNote, setNewNote] = useState(initialState)
	const [buttonText, setButtonText] = useState("Save")

	const handleChange = (e) => {
		setNewNote({ ...newNote, [e.target.name]: e.target.value });
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const message = await createNote(newNote)
			if (message === 'success') {
				setButtonText("Saved!")
			}
			setTimeout(() => {
				closeForm()
			}, 1000)
		} catch (error) {
			setButtonText("Error")
			throw new Error(error)
		}
	}

	return (
		<div className={classes.container}>
			<Form onSubmit={handleSubmit} title="Create Note" color="black">
				<div className={classes.form}>
					<Input
						htmlFor="title"
						placeholder="Title"
						type="text"
						name="title"
						value={newNote.title}
						onChange={handleChange}
					></Input>

					<Textarea
						placeholder="Type new note here..."
						name="content"
						value={newNote.content}
						onChange={handleChange}
						rows="20"
					></Textarea>

					<div className={classes.buttons}>
						<Button type="submit">{buttonText}</Button>
						<Button onClick={closeForm}>Cancel</Button>
					</div>
				</div>
			</Form>
		</div>




	);
};

export default CreateNoteForm;