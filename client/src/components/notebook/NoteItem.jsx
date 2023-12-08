import classes from "./styles/NoteItem.module.css";
import { useState } from "react";
import { MdOutlineEditNote, MdKeyboardDoubleArrowUp, MdKeyboardDoubleArrowDown } from "react-icons/md";
import {ButtonIcon, Modal, Form, Textarea, Button} from "../../ui/index.js";
import {EditNoteForm} from "../index.js";

const NoteItem = ({ note, updateNote }) => {

	const [showContent, setShowContent] = useState(false)
	const [displayedNoteContent, setDisplayedNoteContent] = useState(null)
	const [editMode, setEditMode] = useState(false)
	const [contentValue, setContentValue] = useState(note.content)

	const updatedDate = new Date(note.updatedAt).toLocaleString('en-US',{ year:'numeric', month:'short', day:'numeric', timeZone: 'UTC' })

	return (
		<div className={classes.container}>

			<div className={classes.titleDate}>
				<div className={classes.title}>
					{note.title}
				</div>
				<div className={classes.date}>
					{updatedDate}
				</div>
			</div>

			<div className={classes.content}>

				{
					editMode ?
						<Modal height="90vh">
							<EditNoteForm
								_id={note._id}
								title={note.title}
								content={note.content}
								updateNote={updateNote}
								closeForm={()=>setEditMode(false)}
							/>
						</Modal>

						:
						<div className={`${showContent ? classes.expanded : classes.collapsed}`}>
							{note.content}
						</div>
				}

				{showContent && !editMode &&
					<div className={classes.editButton}>
						<ButtonIcon onClick={()=>setEditMode(true)}><MdOutlineEditNote /></ButtonIcon>
					</div>
				}

				<div className={classes.buttons}>
					{
						showContent ?
							<ButtonIcon onClick={()=> {
								setShowContent(false)
								setEditMode(false)
							}}><MdKeyboardDoubleArrowUp /></ButtonIcon>
							:
							<ButtonIcon	onClick={()=>setShowContent(true)}><MdKeyboardDoubleArrowDown /></ButtonIcon>
					}
				</div>
			</div>
		</div>
	);
};

export default NoteItem;