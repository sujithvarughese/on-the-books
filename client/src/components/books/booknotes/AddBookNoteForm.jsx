import classes from "./styles/AddBookNoteForm.moudule.css?inline";
import { Input, Button, Form, Modal, Card } from "../../../UI";
import { useState } from "react";
import iconX from "../../../assets/images/x_icon.svg"

const initialState = {
	title: "",
	content: ""
}

const AddBookNoteForm = ({ addBookNote, hideForm }) => {

	const [newBookNote, setNewBookNote] = useState(initialState)

	const handleChange = (e) => {
		setNewBookNote({ ...newBookNote, [e.target.name]: e.target.value });
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		addBookNote(newBookNote)
		hideForm()
	}

	return (
		<Modal>
			<Card>


			<Form onSubmit={handleSubmit} title="Notes">
				<Input
					htmlFor="title"
					label="title"
					type="text"
					name="title"
					value={newBookNote.title}
					onChange={handleChange}
				></Input>

				<Input
					htmlFor="content"
					label="content: "
					type="text"
					name="content"
					value={newBookNote.content}
					onChange={handleChange}
				></Input>

				<div className={classes.buttons}>
					<div className={classes.btn}>
						<Button type="submit">Add Note</Button>
					</div>
					<div className={classes.btn}>
						<Button onClick={()=>hideForm}>Cancel</Button>
					</div>

				</div>

			</Form>
			</Card>
		</Modal>

	);
};

export default AddBookNoteForm;