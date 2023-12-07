import classes from "./styles/NoteContent.module.css"
import {Button, Form, Input, Modal, Card, Textarea, ButtonIcon} from "../../ui/index.js";
import {useEffect, useState} from "react";
import { MdOutlineEditNote } from "react-icons/md"

const NoteContent = ({ note, updateNote }) => {

	const { title, content, updatedAt, createdAt } = note
	const updatedDate = new Date(note.updatedAt).toLocaleString('en-US',{ year:'numeric', month:'short', day:'numeric', timeZone: 'UTC' })
	const createdDate = new Date(note.createdAt).toLocaleString('en-US',{ year:'numeric', month:'short', day:'numeric', timeZone: 'UTC' })

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

	useEffect(() => {
		console.log("yo")
	}, [title]);

	return (
		<div className={classes.container}>

			<div className={classes.editButton}>
				{
					!editMode && updateNote &&
					<ButtonIcon
						onClick={(prevState)=>setEditMode(true)}
					>
						<MdOutlineEditNote />
					</ButtonIcon>
				}
			</div>


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
				<div className={classes.content}>
					<div className={classes.dates}>
						<div>
							Last updated on {updatedDate}
						</div>
						<div>
							Created {createdDate}
						</div>
					</div>
					<div className={classes.title}>
						{title}
					</div>
					<div className={classes.content}>
						{content}
					</div>
				</div>
			}
		</div>
	);
};

export default NoteContent;