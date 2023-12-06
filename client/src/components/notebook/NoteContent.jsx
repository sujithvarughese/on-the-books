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

const NoteContent = ({ note, editNote }) => {

	const [editMode, setEditMode] = useState(false)
	const [noteTitle, setNoteTitle] = useState(note.title)
	const [noteContent, setNoteContent] = useState(note.content)

	const handleSubmit = (e) => {
		e.preventDefault()
		setEditMode(false)
		editNote(noteContent)
	}

	const handleCancel = () => {
		setNoteTitle(note.title)
		setNoteContent(note.content)
		setEditMode(false)
	}

	return (
		<div className={classes.content}>

			{
				!editMode && <Button onClick={(prevState)=>setEditMode(true)}>Edit</Button>
			}


			{
				editMode ?
				<Input
					htmlFor="noteContent"
					type="text"
					name="noteContent"
					value={noteTitle}
					onChange={(e)=>setNoteTitle(e.target.value)}
				></Input>
				:
				<div>
					{noteTitle}
				</div>
			}

			{
				editMode ?
				<Form onSubmit={handleSubmit} title="Edit Note">
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
					{noteContent}
				</div>
			}
		</div>
	);
};

export default NoteContent;