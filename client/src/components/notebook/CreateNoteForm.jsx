import classes from "./styles/CreateNoteForm.moudule.css?inline";
import { Input, Button, Form, Modal, Card, Textarea } from "../../ui/index.js";
import { useState } from "react";
import iconX from "../../assets/images/x_icon.svg"

const initialState = {
	title: "",
	content: ""
}

const CreateNoteForm = ({ createNote, closeForm }) => {

	const [newNote, setNewNote] = useState(initialState)

	const handleChange = (e) => {
		setNewNote({ ...newNote, [e.target.name]: e.target.value });
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		createNote(newNote)
		closeForm()
	}

	return (
		<Modal>
			<Form onSubmit={handleSubmit} title="Add Note">
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
					rows="15"
				></Textarea>

				<div className={classes.buttons}>
					<div className={classes.btn}>
						<Button type="submit">Create Note</Button>
					</div>
					<div className={classes.btn}>
						<Button onClick={closeForm}>Cancel</Button>
					</div>

				</div>

			</Form>

		</Modal>

	);
};

export default CreateNoteForm;