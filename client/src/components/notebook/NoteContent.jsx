import classes from "./styles/NoteContent.module.css"
import {
	Button,
	Form,
	Input,
	Modal,
	Card,
	Textarea
} from "../../ui/index.js";
import { useState } from "react";

const NoteContent = ({ title, content, updateNote }) => {

	const [editMode, setEditMode] = useState(false)
	const [noteTitle, setNoteTitle] = useState(title)
	const [noteContent, setNoteContent] = useState(content)

	const handleSubmit = (e) => {
		e.preventDefault()
		setEditMode(false)
		updateNote(noteContent)
	}

	const handleCancel = () => {
		setNoteTitle(title)
		setNoteContent(content)
		setEditMode(false)
	}

	return (
		<div className={classes.content}>

			{
				!editMode && updateNote && <Button onClick={(prevState)=>setEditMode(true)}>Edit</Button>
			}


			{
				editMode ?

				<Form onSubmit={handleSubmit} title="Edit Note">
					<Input
						htmlFor="noteContent"
						type="text"
						name="noteContent"
						value={noteTitle}
						onChange={(e)=>setNoteTitle(e.target.value)}
					></Input>
					<Textarea
						placeholder="Type new note here..."
						name="content"
						value={noteContent}
						onChange={(e)=>setNoteContent(e.target.value)}
						rows="15"
					></Textarea>
					<Button type="submit">Save</Button>
					<Button onClick={handleCancel}>Cancel</Button>
				</Form>
				:
				<div>
					<div>
						{noteTitle}
					</div>
					<div>
						{noteContent}
					</div>
				</div>
			}
		</div>
	);
};

export default NoteContent;