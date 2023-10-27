import classes from "./styles/BookNoteContent.module.css"
import { Button, Form, Input, Modal, Card } from "../../../UI";
import { useState } from "react";

const BookNoteContent = ({ content, editBookNote, deleteBookNote }) => {

	const [editMode, setEditMode] = useState(false)
	const [noteContent, setNoteContent] = useState(content)

	const handleChange = (e) => {
		setNoteContent(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setEditMode(false)
		editBookNote(noteContent)
	}

	return (
		<div className={classes.content}>

			{
				editMode ?
					<Modal>
						<Card>
						<Form onSubmit={handleSubmit} title="Edit">
							<Input
								htmlFor="noteContent"
								type="text"
								name="noteContent"
								value={noteContent}
								onChange={handleChange}
							></Input>
							<Button type="submit">Submit</Button>
							<Button onClick={(prevState)=>setEditMode(false)}>Cancel</Button>
						</Form>
						</Card>
					</Modal>
					:
					<div>
						{noteContent}
					</div>
			}


			<div className={classes.buttons}>
				<div className={classes.btn}>
					<Button onClick={(prevState)=>setEditMode(!editMode)}>Edit</Button>
				</div>

				<div className={classes.btn}>
					<Button onClick={deleteBookNote}>Delete</Button>
				</div>

			</div>
		</div>
	);
};

export default BookNoteContent;